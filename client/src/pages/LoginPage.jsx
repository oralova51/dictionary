import { LogOut } from "lucide-react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import React from "react";
import axiosInstance from "../shared/lib/axiosInstance";

export default function LoginPage() {
  const getCookieHandler = async () => {
    try {
      const response = await axiosInstance("/api/auth/cookie");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCookieHandler = async () => {
    try {
      const response = await axiosInstance.delete("/api/auth/cookie");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getMyCookieHandler = async () => {
    try {
      const response = await axiosInstance("/api/auth/mycookie");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Button onClick={getCookieHandler}>Получить куку</Button>
        <Button onClick={deleteCookieHandler}>Удалить куку</Button>
        <Button onClick={getMyCookieHandler}>Увидеть куку</Button>
      </ButtonGroup>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Логин</Form.Label>
          <Form.Control type="email" placeholder="Введите e-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>

        <Button variant="primary">Войти</Button>
      </Form>
      Выход <LogOut />
    </>
  );
}
