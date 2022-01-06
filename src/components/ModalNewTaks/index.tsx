import {useState} from 'react'
import { Container } from "./style"
import Modal from 'react-modal'

interface modalProps {
  modalIsOpen:boolean,
  onRequestClose: ()=> void 
}

export function ModalNewTaks ({modalIsOpen,onRequestClose}  :modalProps){
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return(
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
     
      >
       <Container>
        <h2>teste</h2>
      </Container>
      </Modal>
  )
}