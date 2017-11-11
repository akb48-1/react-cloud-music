export const ADD = 'ADD';
export const LESS = 'LESS';
export const ASIDE = 'ASIDE';

export const onAdd = payload => ({
    type: ADD
});

export const onLess = payload => ({
    type: LESS,
    payload,
});

export const toShowAside = payload => ({
    type: ASIDE,
    payload,
});