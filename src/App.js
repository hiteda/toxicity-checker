import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
        <div className="App">
          <header className="App-header">
            <h1>Home Page</h1>
            <h2>{params.item}</h2>
          </header>
        </div>
      );
  }
}

export default App;
