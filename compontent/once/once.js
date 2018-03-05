import React, { Component } from 'react';
import './once.styl';

class Once extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="once">
                <div className="once-content">敬请期待！</div>
            </div>
        )
    }
}

export default Once;