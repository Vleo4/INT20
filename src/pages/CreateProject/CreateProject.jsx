import React from "react";
import { Subheading } from "../../components";
import "./CreateProject.css";
import ArrowDown from "../../assets/ArrowDown.png";

const CreateProject = () => {
  return (
    <div className="app__createProject">
      <Subheading title="Створити проєкт" />
      <form>
        <h2>Назва проєкта</h2>
        <input type="text" />
        <h2>Про проєкт</h2>
        <textarea cols="1" rows="7" type="text"></textarea>
        <h2>Доступ</h2>
        <select>
          <option>Відкрито</option>
          <option>Тільки при запрошенні</option>
          <option>Закрито</option>
        </select>
        <button type="submit">Створити проєкт</button>
      </form>
    </div>
  );
};

export default CreateProject;
