/**
 * Created by Mak on 2017/4/2.
 */
import React, {Component} from 'react';
import {Result, Icon} from 'antd-mobile';
import notice from './../../Static/svg/notice.svg';


class Warn extends Component {
    render() {
        return (
            <div className="NoMatch">
                <Result
                    img={<Icon type={notice} className="icon"/>}
                    title="非法操作"
                    message="你不是管理员不能进入此页面"
                    buttonText="回到首页"
                    buttonType="primary"
                    buttonClick={e => this.context.router.history.replace('/')}
                />
            </div>
        )
    }
}

Warn.contextTypes = {
    router: React.PropTypes.object
};

export default Warn;