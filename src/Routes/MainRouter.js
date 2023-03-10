import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Main from "./Main";
import Welcome from "./Welcome";
import Submit from "./Submit";
import Answers from "./Answers";

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/app" element={<Main/>}/>
          <Route path="/submit" element={<Submit/>}/>
          <Route path="/answers" element={<Answers/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter