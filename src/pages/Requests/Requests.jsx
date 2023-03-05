import React from "react";
import { RequestCard, Subheading } from "../../components";
import "./Requests.css";

import axios from "axios";
import jwtDecode from "jwt-decode";

const requestURL =
  "https://int20back.brainstormingapplication.com/api/orderslist/";

const Requests = () => {
  const [requests, setRequests] = React.useState([]);
  React.useEffect(() => {
    const token = jwtDecode(localStorage.getItem("token"));
    axios
      .get(requestURL, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setRequests(response.data);
        console.log(response);
      });
  }, []);
  return (
    <div className="app__requests bg__wrap">
      <Subheading title="Заявки" />
      <div className="app__requests-posts">
        {requests && (
          <>
            {requests.map((request) => {
              return <RequestCard data={request} id={request.id} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Requests;
