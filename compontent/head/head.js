import React, { Component } from 'react';
import './head.styl';
import {connect} from 'react-redux';
import {onAdd, onLess} from '../../action/action';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            left: 0,
        };
        this.changeActive = this.changeActive.bind(this);
    }
    changeActive() {
        const header = document.querySelector('#header');
        const target = document.querySelectorAll('.sub-tab');
        const rect = target[0].getBoundingClientRect();

        this.setState({
            width: rect.width,
            left: rect.left - header.getBoundingClientRect().left,
        });
    }
    render() {
        const { left, width } = this.state;
        const {name, age} = this.props;
        const appendData = this.props;
        console.log(name, age);
        return (
            <div id="header">
                <div className="name">
                    <div className="meun iconfont">&#xe609;</div>
                    <div className="search iconfont" 
                        onClick={() => this.props.toLessAction({age: 30})}>
                        <a>&#xe62e;</a>
                    </div>
                    <h2 onClick={() => this.props.toAddAction({name: 'shusiwei', age: 18})}>云音乐</h2>
                </div >
                <div className="tab">
                    <span className="sub-tab">
                        <a>我的</a>
                    </span>
                    <span className="sub-tab" onClick={this.changeActive}>
                        <a>发现</a>
                    </span >
                    <span className="sub-tab" onClick={this.changeActive}>
                        <a>一个</a>
                    </span >
                    <i style={{ 'left': left + 'px', 'width': width + 'px' }}></i>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
    };
};

const mapDispatchToProps = dispatch => ({
    toAddAction: payload => dispatch(onAdd(payload)),
    toLessAction: payload => dispatch(onLess(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Head);