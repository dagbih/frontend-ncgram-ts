import * as React from 'react';
import './App.css';
import { Feed } from './components/feed/feed';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Feed />
      </div>
    );
  }
}

export default App;
