import React, { useState } from "react";
import "./Login.css";
import LogoLogin from "../../assets/LogoLogin.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logPost = async () => {
    console.log(username, password);
    await axios
      .post("https://int20back.brainstormingapplication.com/api/token/", {
        username,
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
        <div className="app__login-main_loginCard">
          <h3>Вхід</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              logPost();
              setUsername("");
              setPassword("");
            }}
          >
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Логін"
              style={{ marginTop: "50px", marginBottom: "40px" }}
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
            <Link className="app__login-main_loginCard-question" to="/signup">
              Не маєте аккаунту?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
