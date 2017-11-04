import React, { Component } from 'react';
// import date from '@json/data.json';
import './player.styl';

class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { progress, viewAside, isPlay, duration, pausedOrplay } = this.props;
        const proM = '' + Math.floor(progress / 60);
        const proS = progress % 60 > 9 ? '' + (progress % 60) : '0' + (progress % 60);
        const endM = '' + Math.floor(duration / 60);
        const endS = duration % 60 > 9 ? '' + (duration % 60) : '0' + (duration % 60);
        const proStr = `${proM}:${proS}`;
        const endStr = `${endM}:${endS}`;

        return (
            <div id="player">
                <div className="miniMusic">
                    <div className="musicImg">
                        <img src="" alt="" />>
                    </div>
                    <div className="musicName">
                        <p>刚好遇见你</p>
                        <div className="progress">
                            <span className="start">{proStr}</span>
                            <div className="progressBar">
                                <div className="now">
                                    <div className="dtagMask" style={{'width':((progress / duration) * 100) + '%'}}></div>
                                    <div className="drag" style={{'left':((progress / duration) * 100) + '%'}}></div>
                                </div>
                            </div>
                            <span className="end">{endStr}</span>
                        </div>
                    </div>
                    <div className={`musicControl iconfont ${isPlay ? 'icon-pause' : 'icon-bofang'}`} onClick={pausedOrplay}></div>
                    {isPlay}
                </div>
            </div>
        );
    }
}

export default Player;