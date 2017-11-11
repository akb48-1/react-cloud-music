import React, { Component } from 'react';
import './asideMenu.styl';
import {connect} from 'react-redux';
import {onAdd, onLess, toShowAside} from '../../action/action';

class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        console.log(this.props.showAside)
        return (
            <div className={`asideMenu clearfix ${this.props.showAside ? 'active' : ''}`} onClick={this.getData}>
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
                        <a className="break iconfont" onClick={() => this.props.toAsideAction({showAside: false})}>&#xe774;</a>
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
                <div className="mask" onClick={() => this.props.toAsideAction({showAside: false})}></div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        showAside: state.showAside
    }
}
const mapDispatchToProps = dispatch => ({
    toAsideAction: payload => dispatch(toShowAside(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);