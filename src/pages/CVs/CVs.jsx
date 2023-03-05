import React from "react";
import { CVCard, Subheading } from "../../components";
import "./CVs.css";

import axios from "axios";
import { Link } from "react-router-dom";

const cvsURL = "https://int20back.brainstormingapplication.com/api/cv/";

const CVs = () => {
  const [cvs, setCvs] = React.useState([]);

  React.useEffect(() => {
    axios.get(cvsURL).then((response) => {
      setCvs(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="app__cvs bg__wrap">
      <Subheading title="Усі резюме" />
      <div className="app__cvs-posts">
        <>
          {cvs.map((cv) => {
            return (
              <Link to={`/cv/${cv.id}`} key={cv.id}>
                <CVCard data={cv} />
              </Link>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default CVs;
