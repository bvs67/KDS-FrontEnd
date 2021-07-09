import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StrucTree } from '../components/StrucTree';
import { Users } from '../components/Users';
// import { ShowModal } from '../components/ShowModal';
import { StrucPad } from '../components/StrucPad';
// import { loadOBJ, } from '../actions/PageActions';
import { getStrucTree, addPad } from '../actions/StrucActions';
import { delPad } from '../actions/StrucActions';
// import { getUsers } from '../actions/UsersActions';
import { userReload } from '../actions/UsersActions';
import { userAddReload } from '../actions/UsersActions';
import { userTransReload } from '../actions/UsersActions';
import { getUser } from '../actions/UsersActions';
import { addUser } from '../actions/UsersActions';
import { editUser } from '../actions/UsersActions';
import { transPad } from '../actions/UsersActions';
import { setNode } from '../actions/StrucActions';

import { getMenuPoint } from '../actions/MenuActions';
// import { setHistory } from '../actions/ObjActions';
import { setCurrentId } from '../actions/GlobalActions';
import { getStrucDash } from '../actions/DashActions';
import { loadOBJ } from '../actions/ObjActions';

export class Contact extends Component {
    render() {
        const {
            structree,
            getStrucTreeAction,
            setNodeAction,
            users,
            userReloadAction,
            userAddReloadAction,
            userTransReloadAction,
            editUserAction,
            addUserAction,
            getUserAction,
            transPadAction,
            getMenuPointAction,
            getStrucDashAction,
            setCurrentIdAction,
            global, 
            addPadAction,
            delPadAction,
            obj,
            loadOBJAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        <StrucTree
                            strucArray={structree.strucArray}
                            isFetching={structree.isFetching}
                            getStrucTree={getStrucTreeAction}
                            CurrentNode={structree.CurrentNode}
                            setNode={setNodeAction}
                            getStrucDash={getStrucDashAction}
                            CurNodeId={global.CurNodeId}
                        />
                    </div>
                    <div id="data-block">
                        <Users
                            OBJArray={obj.OBJArray}
                            loadOBJ={loadOBJAction}
                            // dataArray={users.dataArray}
                            userArray={users.userArray}
                            isFetching={users.isFetching}
                            // getUsers={getUsersAction}
                            getUser={getUserAction}
                            addUser={addUserAction}
                            transPad={transPadAction}
                            Node={structree.CurrentNode}
                            getMenuPoint={getMenuPointAction}
                            setCurrentId={setCurrentIdAction}
                            editUser={editUserAction}
                            userReload={userReloadAction}
                            userAddReload={userAddReloadAction}
                            userTransReload={userTransReloadAction}
                        />
                    </div>
                    <div id="history-block">
                        <StrucPad 
                            addPad={addPadAction}
                            delPad={delPadAction}
                            Node={structree.CurrentNode}
                        />
                    </div>
                </div>
        );
    }
}

export default connect(
    store => ({
        structree: store.structree,
        users: store.users,
        global: store.global,
        obj: store.obj,
    }),
    dispatch => {
        return {
            loadOBJAction: () => dispatch(loadOBJ()),
            getStrucTreeAction: () => dispatch(getStrucTree()),
            userReloadAction: (id,hcom,ph1,ph2,ph3,ph4,em1,em2,em3,em4) => dispatch(userReload(id,hcom,ph1,ph2,ph3,ph4,em1,em2,em3,em4)),
            userAddReloadAction: (id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4) => dispatch(userAddReload(id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4)),
            userTransReloadAction: (pad_id, pad_name, emp_id, odet_id) => dispatch(userTransReload(pad_id, pad_name, emp_id, odet_id)),
            editUserAction: (id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4) => dispatch(editUser(id,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4)),
            getUserAction: (id) => dispatch(getUser(id)),
            addUserAction: (node,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4) => dispatch(addUser(node,obj,ph1,ph2,ph3,ph4,em1,em2,em3,em4)),
            transPadAction: (pad_id, pad_name, emp_id, odet_id) => dispatch(transPad(pad_id, pad_name, emp_id, odet_id)),
            setNodeAction: (node) => dispatch(setNode(node)),
            getMenuPointAction: (id) => dispatch(getMenuPoint(id)),
            setCurrentIdAction: (id) => dispatch(setCurrentId(id)),
            getStrucDashAction: (node) => dispatch(getStrucDash(node)),
            addPadAction: (id, name) => dispatch(addPad(id, name)),
            delPadAction: (pad_id) => dispatch(delPad(pad_id)),
        };
    },
)(Contact);
