import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {NavBar, Icon} from 'antd-mobile';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Home from './../Home/Home';
import Report from './../Report/Report';
import './style.less';

const NoMatch = ({location}) => (
    <div>
        <h3>没有这个页面喔~~~<code>{location.pathname}</code></h3>
    </div>
)

const history = createBrowserHistory();


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
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <div>
                                    <NavBar leftContent="返回" mode="light"
                                            onLeftClick={() => history.goBack() }>NavBar</NavBar>
                                    <Route path="/report" component={Report}/>
                                </div>
                                <Route component={NoMatch}/>
                            </Switch>
                        </ReactCSSTransitionGroup>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
