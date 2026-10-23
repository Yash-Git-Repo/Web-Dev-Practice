import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/components/Home/Home";
import Products from "../src/components/Products/Products";
import SingleProduct from "../src/components/Products/SingleProduct";
import Articles from "../src/components/Articles/Articles";
import Admin from "../src/components/Admin/Admin";
import Sales from "../src/components/Admin/Sales";
import Sellers from "../src/components/Admin/Sellers";
import NotFound from "../src/components/NotFound/NotFound";
import Users from "./components/Admin/Users";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="app_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/articles" element={<Articles />} />

          <Route path="/admin" element={<Admin />} >
          <Route path="sales" element={<Sales />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="users" element={<Users />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
