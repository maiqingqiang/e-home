/**
 * Created by Mak on 2017/4/2.
 */
import React, {Component} from 'react';
import {NavBar} from 'antd-mobile';

class Nav extends Component {
    render() {
        return (
            <NavBar leftContent="返回" mode="light"
                 onLeftClick={() => this.context.router.history.goBack()}>{this.props.children}</NavBar>
        )
    }
}

Nav.contextTypes = {
    router: React.PropTypes.object
};

export default Nav;