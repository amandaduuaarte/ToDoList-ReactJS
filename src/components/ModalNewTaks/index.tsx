import { Container } from "./style"
import Modal from 'react-modal'
import CloseImg from '../../assets/imgs/Closer.svg'

interface modalProps {
  modalIsOpen:boolean,
  onRequestClose: ()=> void 
}

export function ModalNewTaks ({modalIsOpen,onRequestClose}  :modalProps){
 
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
        <input type="input" placeholder="Title"/>
        <input type="text"  placeholder="Description" />
        <button type="submit">Save</button>
      </Container>
      </Modal>
    </>
  )
}