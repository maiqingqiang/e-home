/**
 * Created by Mak on 2017/4/4.
 */
import React,{Component} from 'react';
import { Steps, WingBlank, WhiteSpace, Icon } from 'antd-mobile';
import {NavBar} from './../../Component/index';

const Step = Steps.Step;

class Details extends Component{
    render(){
        return(
            <div className="Details">
                <NavBar>详情</NavBar>
                <WingBlank size="lg">
                    <div className="sub-title">Small size</div>
                    <WhiteSpace />
                    <Steps current={1}>
                        <Step title="Finished" description="This is description" />
                        <Step title="In Progress" description="This is description" />
                        <Step title="Waiting" description="This is description" />
                    </Steps>
                </WingBlank>
            </div>

        )
    }
}

export default Details;