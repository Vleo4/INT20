import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./App.css";
import { Login } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" exact element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
