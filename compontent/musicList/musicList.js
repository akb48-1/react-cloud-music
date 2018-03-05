import React, { Component } from 'react';
import './musicList.styl';
import MusicItem from './musicItem';
import { connect } from 'react-redux'; // 引入connect函数

class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        
        return (
            <div className="musicCon">
                {
                    this.props.musicList.map((obj, index) => {
                        return <MusicItem 
                            musicInfo={obj}
                            key={obj.id}
                            index={index}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {  //将store转换成props(state)
    return {
        musicList: state.musicList
    };
};

const mapDispatchToProps = dispatch => ({   //将action转换成props(方法)
    toGetCurrent: payload => dispatch(getCurrent(payload))   // 通过this.props.toAsideAction(对象参数)调用action里的toShowAside(对象参数)方法
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);