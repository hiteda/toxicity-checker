import React from 'react';
import Results from './components/Results.js';
import './App.css';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.resultsElement = React.createRef();
  }

  render() {
    return (
        <div className="container">
          <div className="center jumbotron">
            <h1>The Internet's "Official" Toxicity Checker</h1>
            <p id="home-desc">Enter a person, place, or thing, and I will arbitrarily assign a toxicity rating to it!</p>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Gasoline" name="item" className="form-control" ref={this.input}/>
              <input type="submit" value="Check Toxicity!" className="btn btn-lg btn-primary"/>
            </form>
          </div>
          <Results ref={this.resultsElement}/>
        </div>
      );
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.current.value);
    this.resultsElement.current.setValue(this.input.current.value);
  }
}

export default App;
