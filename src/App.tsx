import {useState} from 'react'
import {GlobalStyle} from './style/globalStyle';
import {Header} from './components/Header/index';
import {Buttons} from './components/Buttons/index';
import {Task} from './components/Taks/index';
import {Footer} from './components/Footer/index';
import {ModalNewTaks} from './components/ModalNewTaks/index'

import Modal from 'react-modal'
Modal.setAppElement('#root');

function App() {
  const [openModalTaks, setOpenModalTaks] = useState(false);

  function handleCloseModalNewTask(){
    setOpenModalTaks(false);
  }

  
  function handleOpenModalNewTask(){
    setOpenModalTaks(true);
  }
  return (
    <>
    <ModalNewTaks
    modalIsOpen={openModalTaks}
    onRequestClose={handleCloseModalNewTask}
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
