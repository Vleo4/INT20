import React from "react";
import "./CVCard.css";

const CVCard = () => {
  return (
    <div className="app__cvCard">
      <h2>Username</h2>
      <div className="app__cvCard-hard">
        <p>Hard skills:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          beatae assumenda fugit modi unde omnis optio ipsa molestias quidem
          eveniet? Nisi commodi expedita inventore nemo dolorem odit incidunt
          ducimus magni.
        </p>
      </div>
      <div className="app__cvCard-soft">
        <p>Soft skills:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          beatae assumenda fugit modi unde omnis optio ipsa molestias quidem
          eveniet? Nisi commodi expedita inventore nemo dolorem odit incidunt
          ducimus magni.
        </p>
      </div>
      <div className="app__cvCard-languages">
        <p>Languages:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          beatae assumenda fugit modi unde omnis optio ipsa molestias quidem
          eveniet? Nisi commodi expedita inventore nemo dolorem odit incidunt
          ducimus magni.
        </p>
      </div>
    </div>
  );
};

export default CVCard;
