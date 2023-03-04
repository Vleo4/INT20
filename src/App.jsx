import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./App.css";
import {
  CreateCV,
  CreateProject,
  CVs,
  CVView,
  Login,
  Profile,
  Projects,
  ProjectView,
  Requests,
} from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/projects/project" exact element={<ProjectView />} />
          <Route path="/create-project" exact element={<CreateProject />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/requests" exact element={<Requests />} />
          <Route path="/cvs" exact element={<CVs />} />
          <Route path="/my-cv" exact element={<CreateCV />} />
          <Route path="/cv" exact element={<CVView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
