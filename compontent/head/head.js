import React, { Component } from 'react';
import './head.styl';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            left: 0,
        };
        this.changeActive = this.changeActive.bind(this);
    }
    changeActive() {
        const header = document.querySelector('#header');
        const target = document.querySelectorAll('.sub-tab');
        const rect = target[0].getBoundingClientRect();
        
        this.setState({
            width: rect.width,
            left: rect.left - header.getBoundingClientRect().left,
        });
    }
    render() {
        const { left, width } = this.state;
        return (
            <div id="header">
                <div className="name">
                    <div className="meun iconfont">&#xe609;</div>
                    <div className="search iconfont"><a>&#xe62e;</a></div>
                    <h2>云音乐</h2>
                </div >
                <div className="tab">
                    <span className="sub-tab" onClick={ this.changeActive }>
                        <a>我的</a>
                    </span>
                    <span className="sub-tab" onClick={ this.changeActive }>
                        <a>发现</a>
                    </span >
                    <span className="sub-tab" onClick={ this.changeActive }>
                        <a>一个</a>
                    </span >
                    <i style={{'left': left + 'px', 'width': width + 'px'}}></i>
                </div>
            </div>
        );
    }
}

export default Head;