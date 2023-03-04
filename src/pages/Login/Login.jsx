import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const logPost = async () => {
    await axios
      .post("", {
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
        <div className="app__login-header_logo"></div>
      </div>
      <div className="app__login-main">
        <div className="app__login-main_loginCard">
          <h3>Вхід</h3>
          <form>
            <input
              type="text"
              placeholder="Логін"
              style={{ marginTop: "50px", marginBottom: "40px" }}
            />
            <input type="password" placeholder="Пароль" />
            <button type="submit">Продовжити</button>
          </form>
        </div>
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
              type="email"
              placeholder="Електронна пошта"
              style={{ marginTop: "50px", marginBottom: "40px" }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Логін"
              style={{ marginBottom: "40px" }}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
