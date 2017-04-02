import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Home from './../Home/Home';
import Report from './../Report/Report';
import Details from './../Details/Details';
import NoMatch from './../NoMatch/NoMatch';
import './style.less';
import { shouldComponentUpdate } from 'react-immutable-render-mixin';



class App extends Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="container" id="container">
                <Router basename="/e-home/build/">
                    <div className="body">
                        <Route render={({ location }) => (
                            <ReactCSSTransitionGroup
                                transitionName="fade"
                                transitionEnterTimeout={300}
                                transitionLeaveTimeout={300}
                            >
                                <Switch key={location.key} location={location}>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/report" component={Report}/>
                                    <Route path="/details" component={Details}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </ReactCSSTransitionGroup>
                        )}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
