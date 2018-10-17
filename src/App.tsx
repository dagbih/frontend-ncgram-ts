import * as React from 'react';
import './App.css';
import { Feed } from './Home/containers/feed';
import Netcompany from "./Netcompany.png";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Netcompany} className="App-logo" alt="logo" />
        </header>
        <Feed />
      </div>
    );
  }
}

export default App;
