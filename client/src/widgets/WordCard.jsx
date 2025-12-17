import React from "react";
import Card from "react-bootstrap/Card";
import "./WordCard.css";

export default function WordCard({ word }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title className="words">{word.word}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted word">
          Описание термина
        </Card.Subtitle>
        <Card.Text>{word.description}</Card.Text>
        <Card.Link href="#">Изменить</Card.Link>
        <Card.Link href="#">Удалить</Card.Link>
        <Card.Link href="#">Тег</Card.Link>
      </Card.Body>
    </Card>
  );
}
