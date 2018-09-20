import 'isomorphic-fetch';
import * as React from 'react';
import Post from '../post/post';

export class Feed extends React.Component <{}, {posts: []}>{

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

  public fetchPosts = () => {
    return fetch('https://faghelg.herokuapp.com/messages')
      .then(response => response.json());
  };

  public render() {
    return (
      <div>
        {
          this.state.posts.map((post:string) =>
          <Post {...post}/>
          )
        }

      </div>
    );
  }
}