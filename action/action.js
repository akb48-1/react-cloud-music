export const ADD = 'ADD';
export const LESS = 'LESS';

export const onAdd = payload => ({
    type: ADD,
    payload
});

export const onLess = payload => ({
    type: LESS,
    payload
});