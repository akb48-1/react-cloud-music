import axios from 'axios';
import App from '../compontent/app';
import React from 'react';
import { render } from 'react-dom';
import './reset.css';
import '../src/font/iconfont.css';

// setTimeout(() => {
//     axios.get('/search')
//         .then(response => response.data.data.hostList)
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }, 2000);

render(
    <App />,
    document.getElementById('root')
)
