/**
 * Created by Mak on 2017/4/1.
 */
import React from 'react';
import {Grid} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './style.less';
import install from './../../Static/install.svg';
import desc from './../../Static/desc.svg';
import about from './../../Static/about.svg';

const data = [
    {
        icon: install,
        text: '宽带报修',
        href: '/report'
    },
    {
        icon: desc,
        text: '报修详情',
        href: '/about'
    },
    {
        icon: about,
        text: '关于',
        href: '/about'
    },
];

const Home = () => (
    <div className="Home">
        <div className="common__hd">
            <h1 className="common__title">网络创客E家</h1>
            <p className="common__desc">WeUI是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
        </div>
        <Grid data={data} columnNum={3}
              renderItem={(dataItem, index) => (
                  <Link to={dataItem.href} className="grid__a">
                      <img src={dataItem.icon} className="grid__img" alt={dataItem.text}/>
                      <div className="grid__title">{dataItem.text}</div>
                  </Link>
              )}/>
    </div>
);


export default Home;
