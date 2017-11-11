import React, { Component } from 'react';
import './find.styl';

class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStroy: false,
            word: '搜索',
            hitos: ['林子祥', '薛之谦', '刘德华', '任飞扬', '许冠杰', '王京荣', '王庆茂'],
            searchList: ['春天在哪里', '头上有犄角', '小苹果', '大头儿子和小头爸爸'],
        };
    }
    showStroyList() {}
    clearList() {
        this.setState({
            searchList: []
        });
    }
    render() {
        const { showStroy, word, hitos, searchList } = this.state;
        return (
            <div className="find">
                <div className="searchInput">
                    <div className="inputCon">
                        <i className="icon iconfont">&#xe66e;</i>
                        <input type="text" className={`text ${ showStroy ? 'active' : ''}`} placeholder="搜索歌曲" onClick={this.showStroyList} />>
                        <i className="clearText iconfont" style={{display: `${showStroy && word > 0 ? 'block' : 'none'}`}}>&#xe65d;</i>
                        <span className="closeList" style={{display: `${ showStroy ? 'block' : 'none'}`}} onClick={() => this.setState({showStroy: false})}>取消</span>
                    </div>
                </div>
                <div className="hot">
                    热门搜索
                    <div className="keywords">
                        {
                            hitos.map((obj, index) => {
                                return (
                                    <span key={index}>{obj}</span>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="searchList">
                    <ul>
                        {
                            searchList.map((obj, index) => {
                                return (
                                    <li key={index}>
                                        <i className="time iconfont">&#xe71b;</i>
                                        <span className="word">{obj}</span>
                                        <i className="clearIcon iconfont">&#xe627;</i>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="tips" onClick={this.clearList}>清除搜索记录</div>
                </div>
            </div>
        );
    }
}

export default Find;