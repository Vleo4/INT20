import React from "react";
import "./CVView.css";

import axios from "axios";
import { useParams } from "react-router-dom";

const cvViewURL = "https://int20back.brainstormingapplication.com/api/";

const MyCVView = () => {
  const [postCv, setPostCv] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(cvViewURL + "/" + id + "/").then((response) => {
      setPostCv(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="app__cvView bg__wrap">
      {postCv && (
        <>
          <div className="app__cvView-user">
            <h2>Резюме</h2>
            <h2>{postCv.name}</h2>
          </div>
          <h3>Ім'я:</h3>
          <p>{postCv.name}</p>
          <h3>Вік:</h3>
          <p>{postCv.age}</p>
          <h3>Про себе:</h3>
          <p>{postCv.about}</p>
          <h3>Hard skills:</h3>
          <p>{postCv.hard_skills}</p>
          <h3>Soft skills:</h3>
          <p>{postCv.soft_skills}</p>
          <h3>Мови:</h3>
          <p>{postCv.languages}</p>
          <h3>Колишнє місце роботи:</h3>
          <p style={{ marginBottom: "60px" }}>{postCv.former_work}</p>
        </>
      )}
    </div>
  );
};

export default MyCVView;
