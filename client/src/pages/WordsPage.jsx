import React, { useEffect, useState } from "react";
import WordCard from "../widgets/WordCard/WordCard";
import Row from "react-bootstrap/Row";
import axiosInstance from "../shared/lib/axiosInstance";
import Button from "react-bootstrap/Button";
import WordAddForm from "../widgets/WordAddForm";
import Loader from "../shared/hocs/Loader";

export default function WordsPage({ user }) {
  const [words, setWords] = useState([]);
  const [showForm, setShowForm] = useState(false);

  async function getWords() {
    try {
      const { data } = await axiosInstance(`/api/dictionary`);

      if (data.data) setWords(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteHandler = async (id) => {
    try {
      await axiosInstance.delete(`/api/dictionary/${id}`);
      setWords(words.filter((word) => word.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const targetData = event.target;
      const dataForApi = Object.fromEntries(new FormData(targetData));
      const wordToSend = {
        word: dataForApi.word,
        description: dataForApi.description,
        tag: dataForApi.tag,
        userId: user.data?.id, // пока беру моковую
      };
      if (!dataForApi.word || !dataForApi.description || !dataForApi.tag)
        return alert("Заполните все поля");
      const response = await axiosInstance.post(
        import.meta.env.VITE_API + "/dictionary",
        wordToSend
      );
      if (response.status === 201) {
        setWords((prev) => [response.data.data, ...prev]);
        targetData.reset();
      }
      console.log(words);
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = async (id, updatedWord) => {
    try {
      if (!id) {
        console.error("Нет id слова");
        return;
      }
      const response = await axiosInstance.put(`/api/dictionary/${id}`, {
        word: updatedWord.word,
        description: updatedWord.description,
        tag: updatedWord.tag,
        userId: user.data?.id, // пока мок
      });

      setWords((prev) =>
        prev.map((w) => (w.id === id ? response.data.data : w))
      );
    } catch (error) {
      console.error("Ошибка при обновлении слова:", error);
    }
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    getWords();
  }, []);

  return (
    <>
      <Loader isLoading={words.length === 0}>
        {user.status !== "guest" && (
          <Button
            style={{
              margin: "5px",
              padding: "5px",
              position: "absolute",
              right: "20px",
            }}
            onClick={() => setShowForm((prev) => !prev)}
          >
            {showForm ? "Закрыть форму" : "Добавить новое слово"}
          </Button>
        )}
        {showForm && <WordAddForm submitHandler={submitHandler} />}
        {words.length === 0 ? (
          "Здесь пока нет слов, но ты можешь их добавить :)"
        ) : (
          <>
            <Row>
              {words.map((obj) => (
                <WordCard
                  key={obj.id}
                  word={obj}
                  onSave={(updatedWord) => updateWord(updatedWord)}
                  onDelete={() => deleteHandler(obj.id)}
                  onUpdate={updateHandler}
                />
              ))}
            </Row>
          </>
        )}
      </Loader>
    </>
  );
}
