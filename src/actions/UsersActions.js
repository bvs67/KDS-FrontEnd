export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL    = 'GET_USERS_FAIL';

export const GET_USER_REQUEST  = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS  = 'GET_USER_SUCCESS';
export const GET_USER_FAIL     = 'GET_USER_FAIL';

export const TRANS_PAD_REQUEST = 'TRANS_PAD_REQUEST';
export const TRANS_PAD_SUCCESS = 'TRANS_PAD_SUCCESS';
export const TRANS_PAD_FAIL    = 'TRANS_PAD_FAIL';

export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAIL    = 'EDIT_USER_FAIL';

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL    = 'ADD_USER_FAIL';

export function getUsers() {
    return dispatch => {
        dispatch(requestUsers());
        return fetch('/users')
            .then(response => response.json())
            .then(response => {
                dispatch(requestUsersSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestUsersFail(err));
            });
    };
}

// Где requestUsers, requestUsersSuccess, requestUsersFail - функции action creators

function requestUsers() {
    return {
        type: GET_USERS_REQUEST,
    };
}

function requestUsersSuccess(users) {
    var myList = []
    for (var i = 0; i < users.length; i++) {
        var listItem = []
        listItem[0]=users[i].id
        listItem[1]=users[i].Dept_id
        listItem[2]=users[i].Name
        listItem[3]=users[i].Phone_01
        listItem[4]=users[i].Email_01
        listItem[5]=users[i].obj
        myList[i] = listItem
    }
    return {
        type: GET_USERS_SUCCESS,
        payload: myList,
    };
}

function requestUsersFail(err) {
    return {
        type: GET_USERS_FAIL,
        payload: err
    };
}

export function userReload(id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4) {
    return async dispatch => {
        await dispatch(editUser(id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4));
        await dispatch(getUser(id));
    };
}

export function userAddReload(id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4) {
    return async dispatch => {
        await dispatch(addUser(id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4));
        await dispatch(getUser(id));
    };
}

export function userTransReload(id, name, emp, odet) {
    return async dispatch => {
        await dispatch(transPad(id, name, emp, odet));
        await dispatch(getUser(id));
    };
}

export function getUser(id) {
    var myRequest = new Request('/user?id=' + id);
    // console.log(myRequest)
    return dispatch => {
        dispatch(requestUser(id));
        return fetch(myRequest)
            .then(response => response.json())
            .then(response => {
                dispatch(requestUserSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestUserFail(err));
            });
    };
}

function requestUser(id) {
    return {
        type: GET_USER_REQUEST,
        payload: id,
    };
}

function requestUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        payload: user,
    };
}

function requestUserFail(err) {
    return {
        type: GET_USER_FAIL,
        payload: err
    };
}

export function transPad(id, name, emp, odet) {
    console.log('id=' + id + ', name=' + name + ', emp=' + emp + ', odet=' + odet);
    var myRequest = new Request('/transPad?pad_id=' + id + '&pad_name=' + name + '&emp_id=' + emp + '&odet_id=' + odet);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestTransPad());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(response => { dispatch(requestAddObjSuccess(response.data)); })
                .then(() => {
                    dispatch(requestTransPadSuccess());
                    //dispatch(getHistory(obj));
                })
                .catch(err => {
                    dispatch(requestTransPadFail(err));
                })
        );
    };
}

function requestTransPad() {
    return {
        type: TRANS_PAD_REQUEST,
    };
}

function requestTransPadSuccess() {
    return {
        type: TRANS_PAD_SUCCESS,
    };
}

function requestTransPadFail(err) {
    return {
        type: TRANS_PAD_FAIL,
        payload: err,
    };
}

export function editUser(id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4) {
    var myRequest = new Request('/edituser?id=' + id + '&obj=' + obj + '&Phone_01='+ph1+'&Phone_02='+ph2+'&Phone_03='+ph3+'&Phone_04='+ph4+'&Email_01='+em1+'&Email_02='+em2+'&Email_03='+em3+'&Email_04='+em4);
    // console.log(myRequest)
    return dispatch => {
        dispatch(requestEditUser());
        return fetch(myRequest)
            // .then(response => response.json())
            .then(response => {
                dispatch(requestEditUserSuccess());
            })
            .catch(err => {
                dispatch(requestEditUserFail(err));
            });
    };
}

function requestEditUser() {
    return {
        type: EDIT_USER_REQUEST,
    };
}

function requestEditUserSuccess() {
    return {
        type: EDIT_USER_SUCCESS,
    };
}

function requestEditUserFail(err) {
    return {
        type: EDIT_USER_FAIL,
        payload: err
    };
}

export function addUser(node,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4) {
    var myRequest = new Request('/adduser?node=' + node + '&obj='+ obj + '&Phone_01='+ph1+'&Phone_02='+ph2+'&Phone_03='+ph3+'&Phone_04='+ph4+'&Email_01='+em1+'&Email_02='+em2+'&Email_03='+em3+'&Email_04='+em4);
    // console.log(myRequest)
    return dispatch => {
        dispatch(requestAddUser());
        return fetch(myRequest)
            // .then(response => response.json())
            .then(response => {
                dispatch(requestAddUserSuccess());
            })
            .catch(err => {
                dispatch(requestAddUserFail(err));
            });
    };
}

function requestAddUser() {
    return {
        type: ADD_USER_REQUEST,
    };
}

function requestAddUserSuccess() {
    return {
        type: ADD_USER_SUCCESS,
    };
}

function requestAddUserFail(err) {
    return {
        type: ADD_USER_FAIL,
        payload: err
    };
}
