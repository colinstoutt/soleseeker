import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import Shoe from "../pages/Shoe";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/:id" element={<Shoe />}></Route>
      </Routes>
    </main>
  );
};
