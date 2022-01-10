import {useState, useContext} from 'react'
import {GlobalStyle} from './style/globalStyle';
import {Header} from './components/Header/index';
import {Buttons} from './components/Buttons/index';
import {Task} from './components/Taks/index';
import {Footer} from './components/Footer/index';
import {ModalNewTaks} from './components/ModalNewTaks/index'

import taskContext from './hooks/context'

import Modal from 'react-modal'
Modal.setAppElement('#root');
interface taskProps {
  title:string,
  description:string
}
function App() {
  const [openModalTaks, setOpenModalTaks] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 
  const [task, setTask] = useState<taskProps[]>([]);


  function handleCloseModalNewTask(){
    setOpenModalTaks(false);
  }
  function handleOpenModalNewTask(){
    setOpenModalTaks(true);
  }

  const handleSetNewTask = ()=>{
    const newTask = {
      title:title,
      description:description
    }
    setTask(oldState =>[...oldState, newTask]);
    setTitle(''); 
  }

  return (
    <>
    <ModalNewTaks
    modalIsOpen={openModalTaks}
    onRequestClose={handleCloseModalNewTask}
    handleSetNewTask={handleSetNewTask}
    />
    <Header  onOpenModalNewTaks={handleOpenModalNewTask}/>
    <Buttons/>
    <Task/>
    <Footer/>
    <GlobalStyle/>
    </>
  );
}

export default App;
