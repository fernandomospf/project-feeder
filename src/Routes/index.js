import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Page/Login";
import Created from "../Page/Created";
import Search from "../Page/Search";

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/created" element={<Created />} />
        <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default MainRoutes;
