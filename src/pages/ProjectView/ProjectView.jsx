import React, { useState } from "react";
import "./ProjectView.css";
import Like from "../../assets/Like.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";

const baseURL = "https://int20back.brainstormingapplication.com/api/project";

const likeURL = "https://int20back.brainstormingapplication.com/api/like";

const orderURL =
  "https://int20back.brainstormingapplication.com/api/createorder/";

const ProjectView = () => {
  const [post, setPost] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(baseURL + "/" + id + "/").then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleLikeClick = async () => {
    try {
      // Make a PUT request to submit the like
      const response = await axios.put(
        likeURL + "/" + id + "/",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      // Fetch the updated post data from the server
      const updatedPostResponse = await axios.get(baseURL + "/" + id + "/");
      const updatedPost = updatedPostResponse.data;

      // Update the state with the new count of likes
      setPost(updatedPost);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    const token = jwtDecode(localStorage.getItem("token"));
    axios
      .post(
        orderURL,
        {
          closed: false,
          project: post.project.id,
          customer: post.user_x.id,
          executor: token.user_id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="app__projectView bg__wrap">
      {post && (
        <>
          <h1>{post.project.title}</h1>
          <h2>Про проєкт:</h2>
          <p>{post.project.description}</p>
          <h2>Замовник</h2>
          <p>{post.project.customer}</p>
          <h2>Команда:</h2>
          <p>{post.project.developers}</p>
          <h2>Доступ:</h2>
          <p>{post.project.open ? "Відкрито" : "Закрито"}</p>
          <div className="app__projectView-stats">
            <button type="submit" onClick={handleSubmit}>
              Подати заявку
            </button>
            <div className="app__projectCard-info_likes">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <p>{post.project.count_of_likes}</p>
                  <img src={Like} alt="Like" onClick={handleLikeClick} />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectView;
