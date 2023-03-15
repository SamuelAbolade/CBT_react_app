import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Main from "../Main";
import Welcome from "./Welcome";
import Submit from "./Submit";
import Answers from "./Answers";
import Error404 from "./Error404";
import TopNav from "../components/TopNav";
import ContactLink from "../components/ContactLink";

const MainRouter = () => {
  return (
    <>
      <TopNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/app" element={<Main />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/answers" element={<Answers />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <ContactLink/>
    </>
  )
}

export default MainRouter