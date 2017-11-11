import React, { Component } from 'react';
import Head from './head/head';
import Player from './player/player';
import AsideMenu from './asideMenu/asideMenu';
import MusicList from './musicList/musicList';
import Find from './find/find';
import './app.styl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { list } from '../json/data';        // 歌曲信息

const store = createStore(reducers);
let Index = 0;                              // 播放的当前歌曲index;
const musicList = list.map((obj) => obj);   // 备份歌曲信息;

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
        if (self.state.isPlay) {
            $('#media').jPlayer('pause');
        } else {
            $('#media').jPlayer('play');
        }

        self.setState((prevState) => ({
            isPlay: !prevState.isPlay,
        }));
    }
    changRange(value, duration) {
        $('#media').jPlayer('play', (value * duration));
    }
    nextPlay(index) {
        Index = index >= musicList.length ? 0 : index;
        const self = this;
        $('#media').jPlayer('destroy');
        $('#media').jPlayer({
            ready() {
                $(this).jPlayer('setMedia', {
                    mp3: musicList[Index].mediaUrl,
                }).jPlayer('play');
            },
            ended() {
                self.nextPlay(Index+1);
            },
            supplied: 'mp3',
            wmode: 'window',
        });
    }
    removeList(index) {
        musicList.splice(index, 1);
    }
    componentDidMount() {
        // this.nextPlay(Index);
        // $('#media').bind($.jPlayer.event.timeupdate, (e) => {
        //     this.setState({
        //         progress: Math.round(e.jPlayer.status.currentTime),
        //         duration: Math.round(e.jPlayer.status.duration),
        //     });
        // });
    }
    componentWillUnmount() {
        $('#media').unbind($.jPlayer.event.timeupdate);
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div id="app">
                        <AsideMenu />
                        <Head />
                        { /*
                        <MusicList 
                            data={ musicList }
                            nextPlay={ this.nextPlay}
                            playIndex={Index}
                            removeList={this.removeList}
                            isPlay={this.state.isPlay}
                            pausedOrplay={() => this.pausedOrplay(this)}
                        />
                        <Find />
                        */
                        }
                        <Route path="/musicList" render={() => <MusicList
                            data={ musicList }
                            nextPlay={ this.nextPlay}
                            playIndex={Index}
                            removeList={this.removeList}
                            isPlay={this.state.isPlay}
                            pausedOrplay={() => this.pausedOrplay(this)}
                        />}
                        />
                        <Route path="/find" component={Find} />
                        <Player progress={this.state.progress} 
                            duration={this.state.duration} 
                            isPlay={this.state.isPlay} 
                            viewAside={this.state.viewAside} 
                            pausedOrplay={() => this.pausedOrplay(this)}
                            changRange={this.changRange}
                            cover={musicList[Index].cover}
                            title={musicList[Index].musicName}
                            singer={musicList[Index].singer}
                        />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
