import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Guest from './views/guest';
import Index from './views/index';
import Icon from './views/icon';

function App() {
    return (
        <Router>
            <div className="p-8" id="App">
                <Switch id="router-view">
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/guest" component={Guest}></Route>
                    {/* <Route path="/icon" component={Icon}></Route> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
