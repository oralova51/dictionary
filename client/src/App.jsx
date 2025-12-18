import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [user, setUser] = useState({ status: "logging", data: null });

  useEffect(() => {
    setUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/register" element={<AuthPage setUser={setUser} />} />
            <Route path="/" element={<MainPage user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
