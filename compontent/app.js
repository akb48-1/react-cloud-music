import React, { Component } from 'react';
import Head from './head/head';
import Player from './player/player';
import AsideMenu from './asideMenu/asideMenu';
import MusicList from './musicList/musicList';
import './app.styl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);
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
            });
        });
    }
    componentWillUnmount() {
        $('#media').unbind($.jPlayer.event.timeupdate);
    }
    render() {
        return (
            <Provider store={store}>
                <div id="app">
                    <AsideMenu />
                    <Head />
                    <MusicList />
                    <Player progress={this.state.progress} 
                        duration={this.state.duration} 
                        isPlay={this.state.isPlay} 
                        viewAside={this.state.viewAside} 
                        pausedOrplay={() => this.pausedOrplay(this)} />
                </div>
            </Provider>
        );
    }
}

export default App;
