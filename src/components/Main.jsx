import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Shoe from "../pages/Shoe";
import Bag from "../pages/Bag";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/:id" element={<Shoe />}></Route>
        <Route path="/bag" element={<Bag />}></Route>
      </Routes>
    </main>
  );
};
