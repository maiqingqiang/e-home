/**
 * Created by Mak on 2017/4/2.
 */
import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace, Button} from 'antd-mobile';
// import complete from './../../Static/svg/complete.png';
import wait from './../../Static/svg/wait.png';
// import processing from './../../Static/svg/processing.png';
import Nav from './../../Component/NavBar/Nav';
import './style.less';

class Details extends Component {
    render() {
        return (
            <div className="Details">
                <Nav>报修详情</Nav>
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
                                     extra={<Button className="btn" inline size="small" type="ghost">查看详情</Button>}/>
                    </Card>
                    <WhiteSpace size="lg"/>

                </WingBlank>
            </div>
        )
    }
}

export default Details;