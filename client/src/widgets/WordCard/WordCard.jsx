import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Tags from "../../features/Tags/Tags";
import "./WordCard.css";
import ModalEditWordForm from "../../entities/word/ui/ModalEditWordForm";
import axiosInstance from "../../shared/lib/axiosInstance";


export default function WordCard({ word, onUpdate, onDelete }) {
  const [isWord, setIsWord] = useState(word);
  const [show, setShow] = useState(false);

  return (
    <>
       <ModalEditWordForm
        show={show}
        setShow={setShow}
        isWord={isWord}
        setIsWord={setIsWord}
        onUpdate={onUpdate} 
      />
      <Col>
        <Card
          style={{
            width: "20rem",
            padding: "5px",
            margin: "5px",
          }}
        >
          <Card.Body>
            <Tags>Тег</Tags>
            <Card.Title
              className="words"
              style={{ justifyContent: "center", fontWeight: "bold" }}
            >
              {word.word}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted word">
              Описание термина
            </Card.Subtitle>
            <Card.Text className="desc">{word.description}</Card.Text>
            <div className="wordsButtons">
              <Card.Link href="#" onClick={() => setShow((prev) => !prev)}>
                Изменить
              </Card.Link>
              <Card.Link href="#" onClick={onDelete}>
                Удалить
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
