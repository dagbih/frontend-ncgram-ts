import 'isomorphic-fetch';
import * as React from 'react';
import Post from "../post/post";

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
          this.state.posts.map((post:any) => 
           post.imageUrl !== "" &&
          <Post 
            Id={post.id} 
            Title={post.title} 
            Content={post.content} 
            Sender={post.sender}
            ImageUrl={post.imageUrl}
            Timestamp={new Date(post.timestamp)}
            StatusList={post.statusList}
            key={post.id}/>
          
          )
        }

      </div>
    );
  }
}