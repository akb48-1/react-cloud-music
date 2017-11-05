import axios from 'axios';
import App from '../compontent/app';
import React from 'react';
import { render } from 'react-dom';
import './reset.css';
import '../src/font/iconfont.css';
import { AppContainer } from 'react-hot-loader';

// setTimeout(() => {
//     axios.get(`/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${name}`)
//         .then(response => response.data)
//         .then((data) => {
//             const list = data['data']['song']['list'];
//             list.forEach(function(obj, index) {
//                 let data = obj['f'];
//                 let img =data[22];
//                 let musicId = data[21];
//                 let res = { key: 120989363 };
//                 let musicIcon = 'http://imgcache.qq.com/music/photo/mid_album_90/'+ img.charAt(img. length-2)+'/'+img.charAt(img.length-1)+'/'+img+'.jpg';
//                 let musicURI = 'http://ws.stream.qqmusic.qq.com/C200'+musicId+'.m4a?vkey='+res.key+'&guid=123456&fromtag=30';

//                 console.log(data, musicIcon)
//             })
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