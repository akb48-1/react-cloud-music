import React, { Component } from 'react';
import './head.styl';
import {connect} from 'react-redux';
import {onAdd, onLess, toShowAside} from '../../action/action';
import { Link } from 'react-router-dom';

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
        const { showAside } = this.props;
        const appendData = this.props;
        console.log(showAside);
        return (
            <div id="header">
                <div className="name">
                    <div className="meun iconfont" onClick={() => this.props.toAsideAction({showAside: true})}>&#xe609;</div>
                    <div className="search iconfont">
                        <Link to="/find">&#xe62e;</Link>
                    </div>
                    <h2>云音乐</h2>
                </div >
                <div className="tab">
                    <span className="sub-tab">
                        <Link to="/musicList">我的</Link>
                    </span>
                    <span className="sub-tab" onClick={this.changeActive}>
                        <Link to="/find">发现</Link>
                    </span >
                    <span className="sub-tab" onClick={this.changeActive}>
                        <Link to="/once">一个</Link>
                    </span >
                    <i style={{ 'left': left + 'px', 'width': width + 'px' }}></i>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showAside: state.showAside
    };
};

const mapDispatchToProps = dispatch => ({
    toAsideAction: payload => dispatch(toShowAside(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Head);