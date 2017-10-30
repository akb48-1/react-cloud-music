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
        return (
            <div className="musicList">
                <div className="musicItem" onClick={ this.upDataMusic }>
                    <div className="imgBox">
                        <img src="music.img" alt="" />
                    </div>
                    <div className="musicText">
                        <span className="musicName"></span>
                        <i className="delIcon iconfont" onClick={this.delMusic}>&#xe600;</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default musicItem;