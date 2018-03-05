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
