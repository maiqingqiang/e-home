/**
 * Created by Mak on 2017/4/2.
 */
import React, {Component} from 'react';
import {NavBar as Nav} from 'antd-mobile';

class NavBar extends Component {
    render() {
        return (
            <Nav leftContent="返回" mode="light"
                 onLeftClick={() => this.context.router.history.goBack()}>{this.props.children}</Nav>
        )
    }
}

NavBar.contextTypes = {
    router: React.PropTypes.object
};

export default NavBar;