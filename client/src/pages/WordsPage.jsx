import React, { useEffect, useState } from "react";
import WordCard from "../widgets/WordCard/WordCard";

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

  useEffect(() => {
    getWords();
  }, []);

  return <div>{words.map((obj) => (
          <WordCard key={obj.id} word={obj} />
        ))}</div>;
}
