import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route path="" element={Dashboard()} />
          <Route path="dashboard" element={Dashboard()} />
          <Route path="products" element={Products()} />
          <Route path="*" element={<div> 404 Page Not Found </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
