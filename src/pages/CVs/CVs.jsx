import React from "react";
import { CVCard, Subheading } from "../../components";
import './CVs.css';

import axios from "axios";

const cvsURL = "https://int20back.brainstormingapplication.com/api/cv/";

const CVs = () => {
  return (
    <div className="app__cvs bg__wrap">
      <Subheading title="Усі резюме" />
      <div className="app__cvs-posts">
        <CVCard/>
        <CVCard/>
        <CVCard/>
        <CVCard/>
        <CVCard/>
      </div>
    </div>
  );
};

export default CVs;
