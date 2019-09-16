import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import About from './about';
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <header className="navbar nav-fixed-top bg-dark">
                <div className="container">
                <Link to="/" id="logo">Toxicity Checker</Link>
                    <nav>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
