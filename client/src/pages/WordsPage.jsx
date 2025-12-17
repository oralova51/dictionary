import React, { useEffect, useState } from "react";
import WordCard from "../widgets/WordCard/WordCard";
import Row from "react-bootstrap/Row";

export default function WordsPage() {
  const [words, setWords] = useState([]);

  async function getWords() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/dictionary`);
      const data = await response.json();
      if (response.ok) setWords(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateWord() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/dictionary/id`);
      const data = await response.json();
      if (response.ok) console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div>
      <Row>
        {words.map((obj) => (
          <WordCard key={obj.id} word={obj} onSave={(updatedWord) => updateWord(updatedWord)}/>
        ))}
      </Row>
    </div>
  );
}
