import 'isomorphic-fetch';
import * as React from 'react';
import Post from "../components/post";
import { IFeedState, IPost } from "../interfaces";
import "./feed.css";

export class Feed extends React.Component <{}, IFeedState>{

  constructor(props: any) {
    super(props);
    this.state = ({
      posts: []
    });
  }

  public componentDidMount() {
    this.fetchPosts()
      .then(response => this.setState({posts: response}));
  }

  public render() {
    return (
      <div className="feed__container">
        {
          this.state.posts.map((post:IPost) => 
           post.imageUrl !== "" &&
          <Post {...post} key={post.id}/>
          )
        }

      </div>
    );
  }

  private fetchPosts = () => {
    return fetch('https://faghelg.herokuapp.com/messages')
      .then(response => response.json());
  };
}