import React, { Component } from 'react';
import './once.styl';

class Once extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="once">
                一次就好，我带你走遍天涯海角。
            </div>
        )
    }
}

export default Once;