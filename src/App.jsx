import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductCart from "./Components/ProductCart";
import Users from "./Components/Users";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import Shopping from "./Components/Shopping";
import Profile from "./Components/Profile"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/cart/:id" element={<ProductCart />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
