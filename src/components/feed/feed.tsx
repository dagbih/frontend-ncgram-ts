import 'isomorphic-fetch';
import * as React from 'react';
import Post, { IPostProps } from "../post/post";

interface IFeedState {
  posts: []
}

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
      <div>
        {
          this.state.posts.map((post:IPostProps) => 
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