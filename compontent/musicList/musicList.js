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
        console.log(1);
        return (
            <div className="musicCon">
                {
                    this.props.data.map((obj, index) => {
                        return <MusicItem 
                            title={obj.musicName}
                            cover={obj.cover}
                            singer={obj.singer}
                            index={index}
                            nextPlay={this.props.nextPlay}
                            key={obj.id}
                            playIndex={this.props.playIndex}
                            removeList={this.props.removeList}
                            isPlay={this.props.isPlay}
                        />
                    })
                }
            </div>
        );
    }
}

export default MusicList;