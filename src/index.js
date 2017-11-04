import axios from 'axios';
import App from '../compontent/app';
import React from 'react';
import { render } from 'react-dom';
import './reset.css';
import '../src/font/iconfont.css';
import { AppContainer } from 'react-hot-loader';

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
    <AppContainer>
        <App />
    </AppContainer>, 
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}