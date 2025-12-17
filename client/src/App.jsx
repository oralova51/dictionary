import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import WordsPage from './pages/WordsPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/words" element={<WordsPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
