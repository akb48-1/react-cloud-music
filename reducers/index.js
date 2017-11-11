import {ADD, LESS, ASIDE} from '../action/action';
import { combineReducers } from 'redux'; // 多个reducer合并在一起

const initState = {
    showAside: false
};
const doSomething = (state = initState, {type, payload}) => {
    switch (type) {
        case ADD:
            return payload;

        case LESS:
            return {
                ...state,
                ...payload
            };

        case ASIDE:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
};

export default doSomething;
