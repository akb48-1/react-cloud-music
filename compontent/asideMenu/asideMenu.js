import React, { Component } from 'react';
import './asideMenu.styl';

class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewAside: false,
            isSign: false,
        };
    }
    getData() {

    }
    setViewAside() {

    }
    goSign() {

    }
    render() {
        return (
            <div className={`asideMenu clearfix ${this.state.viewAside ? 'active' : ''}`} onClick={this.getData}>
                <div className="aside">
                    <div className="user">
                        <a href="#" className="avatar">
                            <img src="https://microzz.com/img/avatar.jpg" alt="" />
                        </a>
                        <div className="about">
                            <span className="name"><a href="#">heiheihei</a></span>
                            <span className="level radius">Lv100</span>
                            <span className="sign radius" onClick={this.goSign}>{this.state.isSign ? '签到' : '未签到'}</span>
                        </div>
                        <a className="break iconfont" onClick={this.setViewAside}>&#xe774;</a>
                    </div>
                    <div className="settings">
                        <ul>
                            <li><i className="iconfont">&#xe616;</i>我的消息</li>
                            <li><i className="iconfont">&#xe61d;</i>会员中心</li>
                            <li><i className="iconfont">&#xe72b;</i>商城</li>
                            <li><i className="iconfont">&#xe61b;</i>在线听歌免流量</li>
                        </ul>
                        <ul>
                            <li><i className="iconfont">&#xe616;</i>我的好友</li>
                            <li><i className="iconfont">&#xe62c;</i>附近的人</li>
                        </ul>
                        <ul>
                            <li><i className="iconfont">&#xe8f1;</i>个性皮肤</li>
                            <li><i className="iconfont">&#xe61e;</i>关于</li>
                        </ul>
                    </div>
                </div>
                <div className="mask" onClick={this.setViewAside}></div>
            </div>
        );
    }
}

export default AsideMenu;