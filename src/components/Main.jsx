import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Shoe from "../pages/Shoe";
import Bag from "../pages/Bag";
import Nike from "../pages/Nike";
import Jordan from "../pages/Jordan";
import Adidas from "../pages/Adidas";
import AllProducts from "../pages/AllProducts";
import ScrollToTop from "./ScrollToTop";
import { Success } from "../pages/Success";
import { Cancel } from "../pages/Cancel";

export const Main = (props) => {
  return (
    <ScrollToTop>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Index searchQuery={props.searchQuery} />}
          ></Route>
          <Route
            path="/nike"
            element={<Nike searchQuery={props.searchQuery} />}
          ></Route>
          <Route
            path="/jordan"
            element={<Jordan searchQuery={props.searchQuery} />}
          ></Route>
          <Route
            path="/adidas"
            element={<Adidas searchQuery={props.searchQuery} />}
          ></Route>
          <Route
            path="/all-products"
            element={<AllProducts searchQuery={props.searchQuery} />}
          ></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/cancel" element={<Cancel />}></Route>
          <Route path="/:id" element={<Shoe />}></Route>
          <Route path="/bag" element={<Bag />}></Route>
        </Routes>
      </main>
    </ScrollToTop>
  );
};
