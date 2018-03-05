export const ASIDE = 'ASIDE';
export const CURRENT = 'CURRENT';
export const DEL = 'DEL';

export const toShowAside = payload => ({
    type: ASIDE,
    payload,
});

export const getCurrent = (payload) => ({
    type: CURRENT,
    payload
});

export const delMusic = (payload) => ({
    type: DEL,
    payload
});