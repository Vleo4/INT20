import React from "react";
import "./CVView.css";

const CVView = () => {
  return (
    <div className="app__cvView bg__wrap">
      <div className="app__cvView-user">
        <h2>Резюме</h2>
        <h2>User</h2>
      </div>
      <h3>Ім'я:</h3>
      <p>Vitaliy</p>
      <h3>Вік:</h3>
      <p>12</p>
      <h3>Про себе:</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quisquam
        enim, vero ea ullam culpa esse velit omnis vitae iste nesciunt,
        molestias aspernatur architecto facere minima accusantium dignissimos
        perspiciatis debitis!
      </p>
      <h3>Hard skills:</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        omnis recusandae nulla autem hic vel libero beatae, atque ipsam
        consequatur exercitationem dicta aliquam, sapiente nihil repudiandae at
        illo quasi!
      </p>
      <h3>Soft skills:</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        omnis recusandae nulla autem hic vel libero beatae, atque ipsam
        consequatur exercitationem dicta aliquam, sapiente nihil repudiandae at
        illo quasi!
      </p>
      <h3>Мови:</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        omnis recusandae nulla autem hic vel libero beatae, atque ipsam
        consequatur exercitationem dicta aliquam, sapiente nihil repudiandae at
        illo quasi!
      </p>
      <h3>Колишнє місце роботи:</h3>
      <p style={{ marginBottom: "60px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        omnis recusandae nulla autem hic vel libero beatae, atque ipsam
        consequatur exercitationem dicta aliquam, sapiente nihil repudiandae at
        illo quasi!
      </p>
    </div>
  );
};

export default CVView;
