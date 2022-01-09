import { Container } from "./style"
import Modal from 'react-modal'
import CloseImg from '../../assets/imgs/Closer.svg'
import { useState } from "react"

interface modalProps {
  modalIsOpen:boolean,
  onRequestClose: ()=> void 
}

interface taskProps {
  title:string,
  description:string
}
export function ModalNewTaks ({modalIsOpen,onRequestClose}  :modalProps){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 
  const [task, setTask] = useState<taskProps[]>([]);

  const handleNewTask = ()=>{
    const newTask = {
      title:title,
      description:description
    }
    setTask(oldState =>[...oldState, newTask]);
    setTitle(''); 
  }
  return(
    <>
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
        <button type="submit">Save</button>
      </Container>
      </Modal>
    </>
  )
}