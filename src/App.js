import React from 'react';
import Results from './Results.js';
import './App.css';
import './index.css'
import queryString from 'query-string'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itemValue: props.itemValue};
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values.item);
    this.setState({itemValue: values.item});
  }

  render() {
    const itemValue = this.state.itemValue;
    return (
        <div className="container">
          <div className="center jumbotron">
            <h1>The Internet's "Official" Toxicity Checker</h1>
            <p id="home-desc">Enter a person, place, or thing, and I will arbitrarily assign a toxicity rating to it!</p>
            <form method="get" action="/">
              <input type="text" placeholder="Gasoline" name="item" className="form-control"/>
              <input type="submit" value="Check Toxicity!" className="btn btn-lg btn-primary"/>
            </form>
          </div>
          { itemValue && itemValue !== "" && <Results item={itemValue}/> }
        </div>
      );
  }
}

export default App;
