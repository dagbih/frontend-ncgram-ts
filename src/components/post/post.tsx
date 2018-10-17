import * as React from "react";
import "./post.css";

export interface IPostProps {
  content: string,
  id: number,
  imageUrl: string,
  sender: string,
}

const Post = ({
  content,
  sender,
  imageUrl
}: IPostProps) => {
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
