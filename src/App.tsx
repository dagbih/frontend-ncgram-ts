import * as React from 'react';
import './App.css';
import Post from "./components/post/post";

import Netcompany from "./Netcompany.png";

const post = {
Content: "Petter på fylla",
Id: 677,
ImageUrl: "https://s3-eu-west-1.amazonaws.com/faghelg/aaa_image_a29d34ba-7c31-4788-b424-98cfaa0cb041.png","timestamp":"2018-08-17T18:29:08+0000",
Sender: "pernillem",
StatusList: [0] as [any],
Timestamp: new Date("2018-08-17T18:29:08+0000"),
Title: ""
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Netcompany} className="App-logo" alt="logo" />
        </header>
        <Post {...post}/>
      </div>
    );
  }
}

export default App;
