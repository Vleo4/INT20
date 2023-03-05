import React, { useState } from "react";
import { Subheading } from "../../components";
import "./CreateProject.css";

import jwtDecode from "jwt-decode";
import axios from "axios";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [access, setAccess] = useState("true");

  const logPost = async () => {
    const token = jwtDecode(localStorage.getItem("token"));
    console.log(token);
    console.log(title);
    console.log(description);
    console.log(access);

    await axios
      .post(
        "https://int20back.brainstormingapplication.com/api/createproject/",
        {
          title: title,
          description: description,
          open: access,
          customer: token.user_id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("Проєкт успішно створено!");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="app__createProject bg__wrap">
      <Subheading title="Створити проєкт" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logPost();
          setTitle("");
          setDescription("");
          setAccess(true);
        }}
      >
        <h2>Назва проєкта</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <h2>Про проєкт</h2>
        <textarea
          cols="1"
          rows="7"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <h2>Доступ</h2>
        <select
          id="access"
          value={access}
          onChange={(e) => {
            setAccess(e.target.value);
          }}
        >
          <option value={true}>Відкрито</option>
          <option value={false}>Закрито</option>
        </select>
        <button type="submit">Створити проєкт</button>
      </form>
    </div>
  );
};

export default CreateProject;
