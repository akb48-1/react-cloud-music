import React, { Component } from 'react';
import './player.styl';

import { connect } from 'react-redux'; // 引入connect函数
import { toShowAside, getCurrent } from '../../action/action'; // 引入action里定义的方法

class Player extends Component {
    constructor(props) {
        super(props);
        this.nextPlay = this.nextPlay.bind(this);
        this.pausedOrplay = this.pausedOrplay.bind(this); 
        this.changRange = this.changRange.bind(this);
        this.state = {
            isPlay: true,
            progress:0,
            duration:0
        };
    }
    nextPlay(index) {
        const Index = index >= this.props.musicList.length ? 0 : index;
        const current = this.props.musicList[Index];
        const self = this;

        $('#media').jPlayer('destroy');
        $('#media').jPlayer({
            ready() {
                $(this).jPlayer('setMedia', {
                    mp3: current.mediaUrl,
                }).jPlayer('play');
            },
            ended() {
                self.nextPlay(Index + 1);
            },
            supplied: 'mp3',
            wmode: 'window',
        });

        this.props.toGetCurrent({
            type: 'CURRENT',
            current: Index
        })
    }
    pausedOrplay(self) {
        if (self.state.isPlay) {
            $('#media').jPlayer('pause');
        } else {
            $('#media').jPlayer('play');
        };

        self.setState((prevState) => {
            return {isPlay: !(prevState.isPlay)}
        });
    }
    changRange(value, duration) {
        $('#media').jPlayer('play', (value * duration));
    }
    componentDidMount() {
        this.nextPlay(0);
        $('#media').bind($.jPlayer.event.timeupdate, (e) => {
            this.setState({
                progress: Math.round(e.jPlayer.status.currentTime),
                duration: Math.round(e.jPlayer.status.duration)
            });
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log('传入了新值', '旧值:' + this.props, nextProps);
        this.nextPlay(nextProps.current);
    }
    componentWillUnmount() {
        $('#media').unbind($.jPlayer.event.timeupdate);
    }
    
    render() {
        const { progress, duration, isPlay } = this.state;
        const proM = '' + Math.floor(progress / 60);
        const proS = progress % 60 > 9 ? '' + (progress % 60) : '0' + (progress % 60);
        const endM = '' + Math.floor(duration / 60);
        const endS = duration % 60 > 9 ? '' + (duration % 60) : '0' + (duration % 60);
        const proStr = `${proM}:${proS}`;
        const endStr = `${endM}:${endS}`;
        const step = isNaN(progress / duration) ? 0 : progress / duration;
        const { cover, musicName } = this.props.musicList[this.props.current];

        return (
            <div id="player">
                <div className="miniMusic">
                    <div className="musicImg">
                        <img src={cover} alt="" />>
                    </div>
                    <div className="musicName">
                        <p>{musicName}</p>
                        <div className="progress">
                            <span className="start">{proStr}</span>
                            <div className="progressBar">
                                <div className="now">
                                    <div className="dtagMask" style={{'width':((progress / duration) * 100) + '%'}}></div>
                                    <div className="drag" style={{'left':((progress / duration) * 100) + '%'}}></div>
                                    <input type="range" 
                                        className="range" 
                                        ref="range"
                                        min="0" 
                                        max="1" 
                                        step="0.01" 
                                        value={step} 
                                        onInput={() => this.changRange(Number(this.refs.range.value), duration)}/>
                                </div>
                            </div>
                            <span className="end">{endStr}</span>
                        </div>
                    </div>
                    <div className={`musicControl iconfont ${isPlay ? 'icon-pause' : 'icon-bofang'}`} onClick={() => this.pausedOrplay(this)}></div>
                    {isPlay}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {  //将store转换成props(state)
    return {
        musicList: state.musicList,
        current: state.current
    };
};

const mapDispatchToProps = dispatch => ({   //将action转换成props(方法) 
    toGetCurrent: payload => dispatch(getCurrent(payload))  // 通过this.props.toAsideAction(对象参数)调用action里的toShowAside(对象参数)方法
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);