import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Shoe from "../pages/Shoe";
import Bag from "../pages/Bag";
import Nike from "../pages/Nike";
import Jordan from "../pages/Jordan";
import Adidas from "../pages/Adidas";
import AllProducts from "../pages/AllProducts";

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
        <Route
          path="/nike"
          element={
            <Nike
              searchQuery={props.searchQuery}
              setSearchQuery={props.setSearchQuery}
            />
          }
        ></Route>
        <Route
          path="/jordan"
          element={
            <Jordan
              searchQuery={props.searchQuery}
              setSearchQuery={props.setSearchQuery}
            />
          }
        ></Route>
        <Route
          path="/adidas"
          element={
            <Adidas
              searchQuery={props.searchQuery}
              setSearchQuery={props.setSearchQuery}
            />
          }
        ></Route>
        <Route
          path="/all-products"
          element={
            <AllProducts
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
