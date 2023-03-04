import React from "react";
import "./Login.css";

const Login = () => {
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
            <input type="text" placeholder="Логін" />
            <input type="password" placeholder="Пароль" />
            <button type="submit">Продовжити</button>
          </form>
        </div>
        <div className="app__login-main_signupCard">
          <form>
            <input type="email" placeholder="Електронна пошта" />
            <input type="text" placeholder="Логін" />
            <input type="password" placeholder="Пароль" />
            <button type="submit">Продовжити</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
