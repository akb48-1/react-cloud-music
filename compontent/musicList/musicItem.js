import React, { Component } from 'react';
import './musicItem.styl';

import { connect } from 'react-redux'; // 引入connect函数
import { toShowAside, getCurrent, delMusic } from '../../action/action'; // 引入action里定义的方法

class musicItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { cover, musicName, singer } = this.props.musicInfo;
        const { index, toGetCurrent, todelMusic } = this.props;

        return (
            <div className={`musicList ${index === this.props.current ? 'playing' : ''}`} 
                onClick={(e) => {
                    console.log(e, index)
                    toGetCurrent({
                        type: 'CURRENT',
                        current: index,
                    })
                }}
            >
                <div className="musicItem" onClick={ this.upDataMusic }>
                    <div className="imgBox">
                        <img src={cover} alt="" />
                    </div>
                    <div className="musicText">
                        <span className="musicName">{musicName}</span>
                        <span className="singer">{singer}</span>
                    </div>
                    {
                    /*
                    <div className="delIcon iconfont" 
                        onClick={(e) => { e.stopPropagation();
                        todelMusic({
                            type: 'DEL',
                            index
                        });}}>&#xe600;</div>
                    */
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {  //将store转换成props(state)
    return {
        current: state.current
    };
};

const mapDispatchToProps = dispatch => ({   //将action转换成props(方法)
    toGetCurrent: payload => dispatch(getCurrent(payload)),   // 通过this.props.toAsideAction(对象参数)调用action里的toShowAside(对象参数)方法
    todelMusic: payload => dispatch(delMusic(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(musicItem);