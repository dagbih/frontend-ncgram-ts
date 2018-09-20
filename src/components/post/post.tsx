import * as React from "react";
import "./post.css";

interface IPostProps {
  Content: string,
  Id: number,
  ImageUrl: string,
  Sender: string,
  StatusList : [any],
  Timestamp: Date
  Title: string,
}

const Post = ({
  Id,
  Title,
  Content,
  Sender,
  ImageUrl,
  StatusList
}: IPostProps) => {
  return (
  <div className="post__container">
    <div className="post__title">
      <div>{Sender}</div>
    </div>
    <div className="post__image">
      <img src={ImageUrl} className="post__image--fit"/>
    </div>
    <div className="post__content">
      {Content}
    </div>
  </div>
  );
}

export default Post;
