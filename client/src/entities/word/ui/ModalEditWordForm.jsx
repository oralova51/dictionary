import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CirclePlus, CircleX } from "lucide-react";

export default function ModalEditWordForm({
  show,
  setShow,
  isWord,
  setIsWord,
  updateHandler,
}) {
  // Сбор данных формы при submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateHandler(isWord); // передаем текущее состояние
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Изменение слова</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              value={isWord.word}
              onChange={(e) => setIsWord({ ...isWord, word: e.target.value })}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="text"
              value={isWord.description}
              onChange={(e) =>
                setIsWord({ ...isWord, description: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Тег</Form.Label>
            <Form.Control
              type="text"
              value={isWord.tag}
              onChange={(e) => setIsWord({ ...isWord, tag: e.target.value })}
            />
          </Form.Group>

          <ButtonGroup>
            <Button variant="secondary" onClick={() => setShow(false)}>
              <CircleX /> Отмена
            </Button>
            <Button variant="primary" type="submit">
              <CirclePlus /> Сохранить
            </Button>
          </ButtonGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
