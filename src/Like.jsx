import { useState } from "react";
import "./Card_Components/FoodBlogs.css";
import { ReactComponent as Likes } from "../src/images/Icons/favorite.svg";
const Like = () => {
  const [isLiked, setLiked] = useState("false");
  const handleClick = (e) => {
    setLiked(!isLiked);
  };
  return (
    <button className="like-btn" onClick={handleClick}>
      <Likes className={`like-icon ${isLiked ? "notLiked" : "liked"}`} />
    </button>
  );
};

export default Like;
