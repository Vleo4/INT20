import React, { useState } from "react";
import { Subheading } from "../../components";
import "./CreateCV.css";

import jwtDecode from "jwt-decode";
import axios from "axios";

const CreateCV = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [age, setAge] = useState(0);
  const [hardSkills, setHardSkills] = useState("");
  const [softSkills, setSoftSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [formerWork, setFormerWork] = useState("");

  const logPost = async () => {
    const token = jwtDecode(localStorage.getItem("token"));
    console.log(token);
    console.log(name);
    console.log(about);
    console.log(age);
    console.log(hardSkills);
    console.log(softSkills);
    console.log(languages);
    console.log(formerWork);
    console.log(token.user_id);

    await axios
      .post(
        "https://int20back.brainstormingapplication.com/api/createcv/",
        {
          name: name,
          about: about,
          age: age,
          hard_skills: hardSkills,
          soft_skills: softSkills,
          languages: languages,
          former_work: formerWork,
          user: token.user_id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("Резюме успішно створено!");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app__createCV bg__wrap">
      <Subheading title="Створити резюме" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logPost();
          setName("");
          setAbout("");
          setAge(0);
          setHardSkills("");
          setSoftSkills("");
          setLanguages("");
          setFormerWork("");
        }}
      >
        <h2>Ім'я</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h2>Вік:</h2>
        <input
          pattern="\d+"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <h2>Про себе:</h2>
        <textarea
          cols="1"
          rows="7"
          type="text"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        ></textarea>
        <h2>Hard skills:</h2>
        <textarea
          cols="1"
          rows="7"
          type="text"
          value={hardSkills}
          onChange={(e) => {
            setHardSkills(e.target.value);
          }}
        ></textarea>
        <h2>Soft skills:</h2>
        <textarea
          cols="1"
          rows="7"
          type="text"
          value={softSkills}
          onChange={(e) => {
            setSoftSkills(e.target.value);
          }}
        ></textarea>
        <h2>Мови:</h2>
        <input
          type="text"
          placeholder="Англійська, тд."
          value={languages}
          onChange={(e) => {
            setLanguages(e.target.value);
          }}
        />
        <h2>Колишнє місце роботи</h2>
        <input
          type="text"
          value={formerWork}
          onChange={(e) => {
            setFormerWork(e.target.value);
          }}
        />
        <button type="submit">Опублікувати резюме</button>
      </form>
    </div>
  );
};

export default CreateCV;
