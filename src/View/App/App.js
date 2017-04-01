import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Home from './../Home/Home';
import Report from './../Report/Report';
import './style.less';

class App extends Component {
    render() {
        return (
            <div className="container" id="container">
                <Router>
                    <div className="body">
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}
                        >
                        <Route exact path="/" component={Home}/>
                        <Route path="/report" component={Report}/>
                        {/*<Route path="/topics" component={Topics}/>*/}
                        </ReactCSSTransitionGroup>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
