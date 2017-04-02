/**
 * Created by Mak on 2017/4/1.
 */
import React from 'react';
import {List, InputItem, WhiteSpace, TextareaItem, Picker, Button, Toast} from 'antd-mobile';
import {NavBar} from './../../Component/index';
import {district} from 'antd-mobile-demo-data';
import {createForm} from 'rc-form';
import axios from 'axios';
import './style.less';
import { shouldComponentUpdate } from 'react-immutable-render-mixin';


const yys = [
    {
        label: '中国电信',
        value: '1',
    },
    {
        label: '中国联通',
        value: '2',
    },
    {
        label: '中国移动',
        value: '3',
    },
];


const gzxx = [

    {
        label: '帐号问题',
        value: '1',
    },
    {
        label: '无法上网',
        value: '2',
    }

];

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);

            if (error) return false;

            Toast.loading('加载中...');

            axios.post('/user', value).then(function (response) {
                console.log(response);
                Toast.hide();
                Toast.success('提交成功!!!', 1);
            }).catch(function (error) {
                console.log(error);
                Toast.hide();
                Toast.offline('网络连接失败!!!', 1);
            }).done(function () {

            });
        });
    };

    render() {
        const {getFieldProps, getFieldError} = this.props.form;
        return (
            <div className="Report">
                <NavBar>宽带报修</NavBar>
                <List renderHeader={() => '联系信息'}>
                    <InputItem {...getFieldProps('name', {
                        rules: [{required: true}],
                    })} clear placeholder="请输入你的姓名" error={!!getFieldError('name')}>姓名</InputItem>
                    <InputItem {...getFieldProps('phone', {
                        rules: [{required: true}],
                    })} clear placeholder="请输入你的手机号码" type="phone"
                               error={!!getFieldError('phone')}>手机号码</InputItem>

                    <Picker data={district} title="选择地区" {...getFieldProps('district', {
                        rules: [{required: true}],
                    })}
                    >
                        <List.Item error={!!getFieldError('district')} arrow="horizontal">地点</List.Item>
                    </Picker>
                    <InputItem {...getFieldProps('room', {
                        rules: [{required: true}],
                    })} clear placeholder="请输入你的房号"
                               error={!!getFieldError('room')}>房号</InputItem>
                </List>

                <List renderHeader={() => '宽带信息'}>
                    <Picker data={yys} cols={1} {...getFieldProps('yys', {
                        rules: [{required: true}],
                    })} >
                        <List.Item error={!!getFieldError('yys')} arrow="horizontal">运营商</List.Item>
                    </Picker>
                    <InputItem{...getFieldProps('account', {
                        rules: [{required: true}],
                    })} error={!!getFieldError('account')} clear placeholder="请输入你的宽带帐号">帐号</InputItem>
                </List>

                <List renderHeader={() => '故障信息'}>
                    <Picker data={gzxx} cols={1} {...getFieldProps('gzxx', {
                        rules: [{required: true}],
                    })} >
                        <List.Item error={!!getFieldError('gzxx')} arrow="horizontal">故障类型</List.Item>
                    </Picker>

                </List>

                <List renderHeader={() => '故障描述'}>
                    <TextareaItem
                        {...getFieldProps('desc', {
                            rules: [{required: true}],
                        })}
                        error={!!getFieldError('desc')}
                        placeholder="带清除按钮，输入会显示"
                        rows={5}
                        count={100}
                    />
                </List>
                <WhiteSpace />
                <Button className="btn" type="primary" onClick={e => this.submit()}>提交</Button>
            </div>
        )
    }
}

export default createForm()(Report);