import React from "react";
import { Subheading } from "../../components";
import "./CreateCV.css";

const CreateCV = () => {
  return (
    <div className="app__createCV bg__wrap">
      <Subheading title="Створити резюме" />
      <form>
        <h2>Ім'я</h2>
        <input type="text" />
        <h2>Вік:</h2>
        <input type="text" />
        <h2>Про себе:</h2>
        <textarea cols="1" rows="7" type="text"></textarea>
        <h2>Hard skills:</h2>
        <textarea cols="1" rows="7" type="text"></textarea>
        <h2>Soft skills:</h2>
        <textarea cols="1" rows="7" type="text"></textarea>
        <h2>Мови:</h2>
        <input type="text" placeholder="Англійська, тд." />
        <h2>Колишнє місце роботи</h2>
        <input type="text" />
        <button type="submit">Опублікувати резюме</button>
      </form>
    </div>
  );
};

export default CreateCV;
