import { Container } from "./style"
import Modal from 'react-modal'
import CloseImg from '../../assets/imgs/Closer.svg'
import { useState,useContext } from "react"
import taskContext from '../../hooks/context'

interface modalProps {
  modalIsOpen:boolean,
  onRequestClose: ()=> void,
  handleSetNewTask:()=> void,
}

interface taskProps {
  title:string,
  description:string
}
export function ModalNewTaks ({modalIsOpen,onRequestClose,handleSetNewTask}  :modalProps){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState<taskProps[]>([]);


  return(
    <taskContext.Provider value={{title:title,description:description}}>
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
       <Container>
        <button type="button" onClick={onRequestClose} className="react-modal-close">
         <img src={CloseImg} alt="closeIcon"/>
        </button>
        <h2>New Task</h2>
        <input 
        onChange={(e) => setTitle(e.target.value)}
        type="input" 
        placeholder="Title"/>
        <input type="text"  
        placeholder="Description" 
        onChange={(e) => setDescription(e.target.value)}
        />
        <button 
        type="submit"
        onClick={handleSetNewTask}
        >Save</button>
      </Container>
      </Modal>
    </taskContext.Provider>
  )
}