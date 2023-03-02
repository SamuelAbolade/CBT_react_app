import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Main from "./Main";
import Welcome from "./Welcome";
import Submit from "./Submit";

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/MainApp" element={<Main/>}/>
          <Route path="/Submit" element={<Submit/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter