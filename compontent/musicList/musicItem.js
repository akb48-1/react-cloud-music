import React, { Component } from 'react';
import './musicItem.styl';

class musicItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    upDataMusic() {

    }
    delMusic() {

    }
    render() {
        const { index, cover, title, singer, playIndex, removeList } = this.props;

        return (
            <div className={`musicList ${index === playIndex? 'playing' : ''}`} onClick={() => this.props.nextPlay(index)}>
                <div className="musicItem" onClick={ this.upDataMusic }>
                    <div className="imgBox">
                        <img src={cover} alt="" />
                    </div>
                    <div className="musicText">
                        <span className="musicName">{title}</span>
                        <span className="singer">{singer}</span>
                    </div>
                    <div className="delIcon iconfont" onClick={(e) => {e.stopPropagation();removeList(index);}}>&#xe600;</div>
                </div>
            </div>
        );
    }
}

export default musicItem;