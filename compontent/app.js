import React, { Component } from 'react';
import Head from './head/head';
import Player from './player/player';
import AsideMenu from './asideMenu/asideMenu';
import MusicList from './musicList/musicList';
import './app.styl';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewAside: false,
            progress: 0,
            duration: 0,
            outTime: null,
            isPlay: true,
        };
    }
    pausedOrplay(self) {
        console.log(self.state.isPlay)
        if (self.state.isPlay) {
            $('#media').jPlayer('pause');
        } else {
            $('#media').jPlayer('play');
        };

        self.setState((prevState) => ({
            isPlay: !prevState.isPlay,
        }));
    }
    componentDidMount() {
        $('#media').jPlayer({
            ready() {
                $(this).jPlayer('setMedia', {
                    mp3: require('@media/ganghaoyujianni.mp3'),
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window',
        });
        $('#media').bind($.jPlayer.event.timeupdate, (e) => {
            this.setState({
                progress: Math.round(e.jPlayer.status.currentTime),
                duration: Math.round(e.jPlayer.status.duration),
                outTime: (this.state.duration) - (this.state.progress),
            });
        });
    }
    componentWillUnmount() {
        $('#media').unbind($.jPlayer.event.timeupdate);
    }
    render() {
        const { progress, outTime, viewAside, isPlay } = this.state;
        const proM = '' + Math.round(progress / 60);
        const proS = progress % 60 > 9 ? '' + (progress % 60) : '0' + (progress % 60);
        const outM = '' + Math.round(outTime / 60);
        const outS = outTime % 60 > 9 ? '' + (outTime % 60) : '0' + (outTime % 60);
        const proStr = `${proM}:${proS}`;
        const outStr = `${outM}:${outS}`;
        return (
            <div id="app">
                <AsideMenu />
                <Head />
                <MusicList />
                <Player progress={proStr} outTime={outStr} isPlay={this.state.isPlay} click={() => this.pausedOrplay(this)} />
            </div>
        );
    }
}

export default App;
