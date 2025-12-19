import React from "react";
import Loader from "../shared/hocs/Loader";

export default function MainPage({ user }) {
  return (
    <>
      <Loader isLoading={!user.data}>
        <h2 className="main-text-hello">
          Добро пожаловать
          {user.status === "logged" ? `, ${user.data?.name}` : ``}
        </h2>
        <p className="main-text">
          <span>«Coding Wiki»</span> — персональный и при этом социальный
          словарь разработчика. Это веб-приложение, где ментор может легко
          сохранить объяснение сложного термина для своего подопечного, а джун —
          быстро найти и понять, что такое, например, «React Hook» или
          «Dependency Injection», причём так, как это объясняет его наставник.
        </p>
      </Loader>
    </>
  );
}
