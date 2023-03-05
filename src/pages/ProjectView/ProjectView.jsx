import React, { useState } from "react";
import "./ProjectView.css";
import Like from "../../assets/Like.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseURL = "https://int20back.brainstormingapplication.com/api/project";

const likeURL = "https://int20back.brainstormingapplication.com/api/like";

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

  return (
    <div className="app__projectView bg__wrap">
      {post && (
        <>
          <h1>{post.title}</h1>
          <h2>Про проєкт:</h2>
          <p>{post.description}</p>
          <h2>Замовник</h2>
          <p>{post.customer}</p>
          <h2>Команда:</h2>
          <p>{post.developers}</p>
          <h2>Доступ:</h2>
          <p>{post.open ? "Відкрито" : "Закрито"}</p>
          <div className="app__projectView-stats">
            <button type="submit">Подати заявку</button>
            <div className="app__projectCard-info_likes">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <p>{post.count_of_likes}</p>
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
