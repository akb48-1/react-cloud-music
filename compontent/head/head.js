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
            count: 0
        };
        this.changeActive = this.changeActive.bind(this);
    }
    changeActive() {
        const header = document.querySelector('#header');
        const target = document.querySelectorAll('.sub-tab');
        
        const hashArr = ['/musicList', '/find', '/once'];
        const hash = window.location.hash.slice(1);
        const activeIndex = hashArr.indexOf(hash) < 0 ? 0 : hashArr.indexOf(hash);
        const rect = target[activeIndex].getBoundingClientRect();

        this.setState({
            width: rect.width,
            left: rect.left,
        });
    }
    componentDidMount() {
        this.changeActive();
    }
    render() {
        const { left, width } = this.state;
        const { showAside } = this.props;
        const appendData = this.props;

        return (
            <div id="header">
                <div className="name">
                    <div className="meun iconfont" onClick={() => this.props.toAsideAction({ type: 'ASIDE',showAside: true})}>&#xe609;</div>
                    <div className="search iconfont" onClick={this.changeActive}>
                        <Link to="/find">&#xe62e;</Link>
                    </div>
                    <h2>云音乐</h2>
                </div >
                <div className="tab">
                    <span className="sub-tab" onClick={this.changeActive}>
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