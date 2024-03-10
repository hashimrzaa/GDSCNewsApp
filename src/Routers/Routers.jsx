import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "../Screens/News";
import SingleNews from "../Screens/SingleNews";
import Navbar from "../Components/Navbar";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/:id" element={<SingleNews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
