import React, { useState, FormEvent } from "react";
import Modal from "react-modal";
import { Container } from "./style";
import CloseImg from "../../assets/imgs/Closer.svg";
import { useTasks } from "../../hooks/context";

interface modalProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
}

export function ModalNewTaks({ modalIsOpen, onRequestClose }: modalProps) {
  const { createTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    await createTask({
      title,
      description,
    });
    onRequestClose();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={CloseImg} alt="closeIcon" />
        </button>
        <h2>New Task</h2>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="input"
          placeholder="Title"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={handleCreateNewTask}>
          Save
        </button>
      </Container>
    </Modal>
  );
}
