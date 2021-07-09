export const GET_COMP_REQUEST = 'GET_COMP_REQUEST';
export const GET_COMP_SUCCESS = 'GET_COMP_SUCCESS';
export const GET_COMP_FAIL = 'GET_COMP_FAIL';

export const SAVE_KIT_REQUEST = 'SAVE_KIT_REQUEST';
export const SAVE_KIT_SUCCESS = 'SAVE_KIT_SUCCESS';
export const SAVE_KIT_FAIL = 'SAVE_KIT_FAIL';

export const NEW_KIT_REQUEST = 'NEW_KIT_REQUEST';
export const NEW_KIT_SUCCESS = 'NEW_KIT_SUCCESS';
export const NEW_KIT_FAIL = 'NEW_KIT_FAIL';

export function compReload(id) {
    return async dispatch => {
        await dispatch(getComplect(id));
        // await dispatch(getComplect('2', id));
        // await dispatch(loadHCOM());
    };
}

export function getComplect(id) {
    var myRequest = new Request('/comp?id=' + id);
    // console.log(myRequest)
    return dispatch => {
        dispatch(requestComp(id));
        return fetch(myRequest)
            .then(response => response.json())
            .then(response => {
                dispatch(requestCompSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestCompFail(err));
            });
    };
}
    
function requestComp(id) {
    return {
        type: GET_COMP_REQUEST,
        payload: id,
    };
}
    
function requestCompSuccess(comp) {
    return {
        type: GET_COMP_SUCCESS,
        payload: comp,
    };
}
    
function requestCompFail(err) {
    return {
        type: GET_COMP_FAIL,
        payload: err
    };
}
    
export function saveKit(json) {
    var myRequest = new Request('/savekit?json=' + json);
     console.log(myRequest)
    return dispatch => {
        dispatch(requestKit());
        return fetch(myRequest)
            .then(response => response.json())
            .then(response => {
                dispatch(requestKitSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestKitFail(err));
            });
    };
}
    
function requestKit() {
    return {
        type: SAVE_KIT_REQUEST,
        payload: '',
    };
}
    
function requestKitSuccess(comp) {
    return {
        type: SAVE_KIT_SUCCESS,
        payload: comp,
    };
}
    
function requestKitFail(err) {
    return {
        type: SAVE_KIT_FAIL,
        payload: err
    };
}

export function newKit(obj,type,name) {
    var myRequest = new Request('/newkit?obj=' + obj + '&type=' + type + '&name=' + name);
     console.log(myRequest)
    return dispatch => {
        dispatch(requestNewKit());
        return fetch(myRequest)
            //.then(response => response.json())
            .then(response => {
                dispatch(requestNewKitSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestNewKitFail(err));
            });
    };
}
    
function requestNewKit() {
    return {
        type: NEW_KIT_REQUEST,
    };
}
    
function requestNewKitSuccess(comp) {
    return {
        type: NEW_KIT_SUCCESS,
    };
}
    
function requestNewKitFail(err) {
    return {
        type: NEW_KIT_FAIL,
        payload: err
    };
}