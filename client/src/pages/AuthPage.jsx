import React, { useState } from "react";
import SignUpForm from "../features/SignUpForm/SignUpForm";
import LoginForm from "../features/LoginForm/LoginForm";
import Button from "react-bootstrap/esm/Button";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  console.log(showLogin);

  return (
    <div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Button onClick={() => setShowLogin((prev) => !prev)}>
          {" "}
          {showLogin ? "Регистрацию" : "Вход"}
        </Button>
      </div>
    </div>
  );
}
