import { ASIDE, CURRENT, DEL } from '../action/action';
import { combineReducers } from 'redux'; // 多个reducer合并在一起
import { list } from '../json/data';        // 歌曲信息
let Index = 0;                              // 播放的当前歌曲index;
const musicList = list.map((obj) => obj);   // 备份歌曲信息;


const initState = {
    showAside: false,
    musicList,
    current: 0
};

const doSomething = (state = initState, { type, payload }) => {
    console.log(state, type, payload)
    switch (type) {

        case ASIDE:
            return {
                ...state,
                ...payload,
            };

        case CURRENT:
            return {
                ...state,
                ...payload
            };

        case DEL:
            console.log(payload)
            return {
                ...state,
                ...payload,
                musicList: state.musicList.filter((obj, i) => {
                    console.log(i, obj);
                    return i !== payload.index
                })
            }; 

        default:
            return state;
    }
};

export default doSomething;
