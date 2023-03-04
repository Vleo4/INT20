import React from "react";
import { RequestCard, Subheading } from "../../components";
import "./Requests.css";

const Requests = () => {
  return (
    <div className="app__requests bg__wrap">
      <Subheading title="Заявки" />
      <div className="app__requests-posts">
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  );
};

export default Requests;
