import React, { useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./App.css";
import {
  CreateCV,
  CreateProject,
  CVs,
  CVView,
  DevProjects,
  Login,
  MyProjects,
  Profile,
  Projects,
  ProjectView,
  Requests,
  SignUp,
} from "./pages";

const App = () => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  return (
    <div>
      <BrowserRouter>
        {isAuth && <Navbar />}
        <Routes>
          <Route
            path="/login"
            exact
            element={<Login setIsAuth={setIsAuth} />}
          />
          <Route
            path="/signup"
            exact
            element={<SignUp setIsAuth={setIsAuth} />}
          />
          {isAuth ? (
            <>
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/my-projects" exact element={<MyProjects />} />
              <Route path="/dev-projects" exact element={<DevProjects />} />
              <Route
                path="/projects/project/:id"
                exact
                element={<ProjectView />}
              />

              <Route path="/create-project" exact element={<CreateProject />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/requests" exact element={<Requests />} />
              <Route path="/cvs" exact element={<CVs />} />
              <Route path="/my-cv" exact element={<CreateCV />} />
              <Route path="/cv/:id" exact element={<CVView />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
          <Route path="*" element={<Navigate to="/profile" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
