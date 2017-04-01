/**
 * Created by Mak on 2017/4/1.
 */
import React, {Component} from 'react';
import {List, InputItem, WhiteSpace, TextareaItem, Picker, Button,Toast} from 'antd-mobile';
import {district, provinceLite as province} from 'antd-mobile-demo-data';
import {createForm} from 'rc-form';
import './style.less';

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

function loadingToast() {
    Toast.loading('加载中...', 5, () => {
        Toast.success('加载成功!!!', 1);
    });
}

class Report extends Component {
    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
            loadingToast();
        });
    }

    render() {
        const {getFieldProps, getFieldError} = this.props.form;
        return (
            <div className="Report">
                <div className="common__hd">
                    <h1 className="common__title">宽带报修</h1>
                    <p className="common__desc">只需要填写以下信息,即可马上报修</p>
                </div>

                <List renderHeader={() => '联系信息'}>
                    <InputItem {...getFieldProps('name', {
                        rules: [{required: true}],
                    })} clear placeholder="请输入你的姓名"  error={!!getFieldError('name')}>姓名</InputItem>
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