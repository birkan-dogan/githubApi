import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Followers from "../components/Followers";
import Following from "../components/Following";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
