import * as React from "react";
import "./post.css";
import { IPost } from "../interfaces";

const Post = ({
  content,
  sender,
  imageUrl
}: IPost) => {
  return (
  <div className="post__container">
    <div className="post__title">
      <div>{sender}</div>
    </div>
    <div className="post__image">
      <img src={imageUrl} className="post__image--fit"/>
    </div>
    <div className="post__content">
      {content}
    </div>
  </div>
  );
}

export default Post;
