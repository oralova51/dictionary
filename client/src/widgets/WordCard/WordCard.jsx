import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import "./WordCard.css";

export default function WordCard({ word, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isWord, setIsWord] = useState(word.word);
  const [isDescription, setIsDescription] = useState(word.description);

  const edit = () => {
    setIsEditing(true);
  };

  return (
    <Col>
      <Card
        style={{
          width: "20rem",
          height: "390px",
          padding: "5px",
          margin: "5px",
        }}
      >
        <Card.Body>
          <Card.Title
            className="words"
            style={{ justifyContent: "center", fontWeight: "bold" }}
          >
            {word.word}
          </Card.Title>
          {isEditing && (
            <input placeholder="Можете редактировать слово"></input>
          )}
          <Card.Subtitle className="mb-2 text-muted word">
            Описание термина
          </Card.Subtitle>
          {isEditing && <input placeholder="Отредактируйте описание"></input>}
          <Card.Text>{word.description}</Card.Text>
          <div className="wordsButtons">
            <Card.Link href="#" onClick={edit}>
              Изменить
            </Card.Link>
            <Card.Link href="#">Удалить</Card.Link>
            <Card.Link href="#">Тег</Card.Link>
            {isEditing && (
              <form>
                <label for="tag-select">Тен</label>
                <select name="tag" id="tag-select">
                  <option value="">-- Выберите тег --</option>
                  <option value="green">Зеленый</option>
                  <option value="blue">Синий</option>
                  <option value="red">Красный</option>
                  <option value="yellow">Желтый</option>
                </select>
              </form>
            )}
            {isEditing &&  <Button>Отправить</Button>}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
