import React, { useState } from "react";
import "./SignUp.css";
import LogoLogin from "../../assets/LogoLogin.png";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const logPost = async () => {
    await axios
      .post("https://int20back.brainstormingapplication.com/api/register/", {
        username,
        email,
        password,
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="app__login">
      <div className="app__login-header">
        <h3>
          Отримайте практичний досвід роботи та розвивайте свої навички в
          командному середовищі
        </h3>
        <h4>Розпочніть свій шлях до успіху прямо зараз!</h4>
        <div className="app__login-header_logo">
          <img src={LogoLogin} alt="LogoLogin" />
        </div>
      </div>
      <div className="app__login-main">
        <div className="app__login-main_signupCard">
          <h3>Реєстрація</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              logPost();
              setEmail("");
              setPassword("");
              setUsername("");
            }}
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Електронна пошта"
              style={{ marginTop: "50px", marginBottom: "40px" }}
            />
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Логін"
              style={{ marginBottom: "40px" }}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">
              <Link to="/login">Продовжити</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
