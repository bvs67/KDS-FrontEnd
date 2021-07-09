export const GET_STRUC_REQUEST = 'GET_STRUC_REQUEST';
export const GET_STRUC_SUCCESS = 'GET_STRUC_SUCCESS';
export const GET_STRUC_FAIL = 'GET_STRUC_FAIL';
export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export const ADD_PAD_REQUEST = 'ADD_PAD_REQUEST';
export const ADD_PAD_SUCCESS = 'ADD_PAD_SUCCESS';
export const ADD_PAD_FAIL = 'ADD_PAD_FAIL';
export const DEL_PAD_REQUEST = 'DEL_PAD_REQUEST';
export const DEL_PAD_SUCCESS = 'DEL_PAD_SUCCESS';
export const DEL_PAD_FAIL = 'DEL_PAD_FAIL';

export function getStrucTree() {
    return dispatch => {
        dispatch(requestStruc());
        return fetch('/structree')
            .then(response => response.json())
            .then(response => {
                dispatch(requestStrucSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestStrucFail(err));
            });
    };
}

function requestStruc() {
    return {
        type: GET_STRUC_REQUEST,
    };
}

function requestStrucSuccess(structree) {
    return {
        type: GET_STRUC_SUCCESS,
        payload: structree,
    };
}

function requestStrucFail(err) {
    return {
        type: GET_STRUC_FAIL,
        payload: err
    };
}

export function setNode(node) {
    return async dispatch => {
        await dispatch(setCurrentNode(node));
        // await dispatch(getHistory(id));
    };
}

export function setCurrentNode(node) {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_NODE,
            payload: node,
        });
    };
}

export function addPad(id, name) {
    console.log('id=' + id + ', name=' + name);
    var myRequest = new Request('/addPad?id=' + id + '&name=' + name);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestAddPad());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(response => { dispatch(requestAddObjSuccess(response.data)); })
                .then(() => {
                    dispatch(requestAddPadSuccess());
                    //dispatch(getHistory(obj));
                })
                .catch(err => {
                    dispatch(requestAddPadFail(err));
                })
        );
    };
}

function requestAddPad() {
    return {
        type: ADD_PAD_REQUEST,
    };
}

function requestAddPadSuccess() {
    return {
        type: ADD_PAD_SUCCESS,
    };
}

function requestAddPadFail(err) {
    return {
        type: ADD_PAD_FAIL,
        payload: err,
    };
}

export function delPad(pad_id) {
    console.log('pad_id=' + pad_id);
    var myRequest = new Request('/delPad?pad_id=' + pad_id);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestDelPad());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(response => { dispatch(requestAddObjSuccess(response.data)); })
                .then(() => {
                    dispatch(requestDelPadSuccess());
                    //dispatch(getHistory(obj));
                })
                .catch(err => {
                    dispatch(requestDelPadFail(err));
                })
        );
    };
}

function requestDelPad() {
    return {
        type: DEL_PAD_REQUEST,
    };
}

function requestDelPadSuccess() {
    return {
        type: DEL_PAD_SUCCESS,
    };
}

function requestDelPadFail(err) {
    return {
        type: DEL_PAD_FAIL,
        payload: err,
    };
}
