import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Shoe from "../pages/Shoe";
import Bag from "../pages/Bag";

export const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Index
              searchQuery={props.searchQuery}
              setSearchQuery={props.setSearchQuery}
            />
          }
        ></Route>
        <Route path="/:id" element={<Shoe />}></Route>
        <Route path="/bag" element={<Bag />}></Route>
      </Routes>
    </main>
  );
};
