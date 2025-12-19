import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function WordAddForm({ submitHandler }) {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Control type="text" placeholder="Название" name="word" />
      <br />
      <Form.Control type="text" placeholder="Описание" name="description" />
      <br />
      <Form.Control type="text" placeholder="Тег" name="tag" />
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
}
