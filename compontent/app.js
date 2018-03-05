import React, { Component } from 'react';
import Head from './head/head';
import Player from './player/player';
import AsideMenu from './asideMenu/asideMenu';
import MusicList from './musicList/musicList';
import Find from './find/find';
import Once from './once/once';
import './app.styl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
    changRange(value, duration) {
        $('#media').jPlayer('play', (value * duration));
    }
<<<<<<< HEAD
    nextPlay(index) {
        console.log(index)
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
=======
>>>>>>> 426e2d0ccb93e1abb90a03d02e849f77d3c3fd86
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
                        <Switch>
                            <Route exact path="/" component={MusicList} />
                            <Route path="/musicList" component={MusicList} />
                            <Route path="/find" component={Find} />
                            <Route path="/once" component={Once} />
                        </Switch>
                        <Player />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
