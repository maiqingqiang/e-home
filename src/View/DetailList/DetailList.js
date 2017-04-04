/**
 * Created by Mak on 2017/4/2.
 */
import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace, Button} from 'antd-mobile';
// import complete from './../../Static/svg/complete.png';
import wait from './../../Static/svg/wait.png';
// import processing from './../../Static/svg/processing.png';
import {NavBar} from './../../Component/index';
import './style.less';

class DetailList extends Component {
    render() {
        const _this =this;
        return (
            <div className="DetailList">
                <NavBar>报修详情</NavBar>
                <WingBlank>
                    <WhiteSpace size="lg"/>
                    <Card>
                        <Card.Header
                            title="yz771078386"
                            thumb={wait}
                            extra={<span>等待接单</span>}
                        />
                        <Card.Body>
                            <div>
                                <p><span className="details__title">运营商：</span>电信</p>
                                <p><span className="details__title">地点：</span>里建校区-11栋-11011</p>
                                <p><span className="details__title">手机号码：</span>18587733312</p>
                                <p><span className="details__title">处理员：</span>麦青强</p>
                                <p><span className="details__title">处理员号码：</span>18587733312</p>
                            </div>
                        </Card.Body>
                        <Card.Footer content="2014-01-01 11:11:11"
                                     extra={<Button className="btn" inline size="small" type="ghost" onClick={e=>this.context.router.history.push('/details')}>查看详情</Button>}/>
                    </Card>
                    <WhiteSpace size="lg"/>

                </WingBlank>
            </div>
        )
    }
}

DetailList.contextTypes = {
    router: React.PropTypes.object
};


export default DetailList;