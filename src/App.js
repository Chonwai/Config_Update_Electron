import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Guest from './views/guest';
import Index from './views/index';

function App() {
    return (
        <Router>
            <div className="p-8" id="App">
                <Switch id="router-view">
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/guest" component={Guest}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
