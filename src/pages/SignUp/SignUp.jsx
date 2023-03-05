import React, { useState } from "react";
import "./SignUp.css";
import LogoLogin from "../../assets/LogoLogin.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const logPost = async () => {
    console.log(username),
      console.log(email),
      console.log(password),
      await axios
        .post("https://int20back.brainstormingapplication.com/api/register/", {
          username,
          email,
          password,
        })
        .then((response) => {
          console.log(response);
          const token = response.data.access;
          setIsAuth(true);

          localStorage.setItem("token", token);

          navigate("/projects");
        })
        .catch((err) => console.log(err));
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
            <button type="submit">Продовжити</button>
            <Link className="app__login-main_loginCard-question" to="/login">
              Вже маєте аккаунт?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
