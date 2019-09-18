import React from 'react'

class About extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
              <div className="center jumbotron">
                <h1>How Does it Work?</h1>
                <p>Using science and cutting-edge algorithmic technology, the Toxicity Checker creates a numeric hash of the input and uses that hash to assign a genuine toxicity rating.</p>
                <h2>"It's Mathemagical!" -Dr. Tae Kashawa</h2>
              </div>
              <div className="center jumbotron">
                  <h1>Is it Accurate?</h1>
                  <p>"Sure!"</p>
                  <h2>"I'd trust it as far as I can throw it." -Dr. Ima Real</h2>
              </div>
            </div>
          );
    }
}

export default About