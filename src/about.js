import React from 'react'

class About extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="App">
              <header className="App-header">
                <h1>About Page</h1>
              </header>
            </div>
          );
    }
}

export default About