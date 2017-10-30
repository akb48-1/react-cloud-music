import React, { Component } from 'react';
import './musicList.styl';
import MusicItem from './musicItem';

class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="musicCon">
                <MusicItem />
            </div>
        );
    }
}

export default MusicList;