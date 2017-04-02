/**
 * Created by Mak on 2017/4/2.
 */
import React, {Component} from 'react';
import {Result, Icon} from 'antd-mobile';
import notice from './../../Static/svg/notice.svg';


class NoMatch extends Component {
    render() {
        return (
            <div className="NoMatch">
                <Result
                    img={<Icon type={notice} className="icon"/>}
                    title="404 not found"
                    message="没有找到这个页面~~"
                    buttonText="回到首页"
                    buttonType="primary"
                    buttonClick={e => this.context.router.history.replace('/')}
                />
            </div>
        )
    }
}

NoMatch.contextTypes = {
    router: React.PropTypes.object
};

export default NoMatch;