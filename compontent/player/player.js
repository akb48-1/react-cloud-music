import React, { Component } from 'react';
// import date from '@json/data.json';
import './player.styl';

class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="player">
                <div className="miniMusic">
                    <div className="musicImg">
                        <img src="" alt="" />>
                    </div>
                    <div className="musicName">
                        <p>歌曲名字</p>
                        <div className="progress">
                            <span className="start">{this.props.progress}</span>
                            <div className="progressBar">
                                <div className="now"></div>
                            </div>
                            <span className="end">{this.props.outTime}</span>
                        </div>
                    </div>
                    <div className={`musicControl iconfont ${this.props.isPlay ? 'icon-pause' : 'icon-bofang' }`} onClick={this.props.click}></div>
                    {this.props.isPlay}
                </div>
            </div>
        );
    }
}

export default Player;