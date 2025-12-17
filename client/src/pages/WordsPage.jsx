import React, { useEffect, useState } from "react";
import axiosInstance from "../shared/lib/axiosInstance";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

export default function WordsPage() {
  const [words, setWords] = useState({});

  async function getWords() {
    try {
      console.log(import.meta.env.VITE_API);
      
      const response = await fetch(import.meta.env.VITE_API + '/words');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWords();
  }, []);

  return <div>Привет</div>;
}
