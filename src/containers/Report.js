import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { StrucTree } from '../components/StrucTree';
import { ExcelReport } from '../components/ExcelReport';
// import { StrucPad } from '../components/StrucPad';
// import { loadOBJ, } from '../actions/PageActions';
// import { getStrucTree, addPad } from '../actions/StrucActions';
import { getUsers } from '../actions/UsersActions';
// import { getUser } from '../actions/UsersActions';
// import { setNode } from '../actions/StrucActions';

// import { getMenuPoint } from '../actions/MenuActions';
// import { setHistory } from '../actions/ObjActions';
// import { setCurrentId } from '../actions/GlobalActions';
// import { getStrucDash } from '../actions/DashActions';

export class Report extends Component {
    render() {
        const {
            // structree,
            // getStrucTreeAction,
            // setNodeAction,
            users,
            getUsersAction,
            // getUserAction,
            // getMenuPointAction,
            // getStrucDashAction,
            // setCurrentIdAction,
            // global, 
            // addPadAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        Список отчетов                           
                    </div>
                    <div id="data-block">
                        <ExcelReport
                            dataArray={users.dataArray}
                            isFetching={users.isFetching}
                            getUsers={getUsersAction}
                        />
                    </div>
                    <div id="history-block">
                        Дополнительная информация
                    </div>
                </div>
        );
    }
}

export default connect(
    store => ({
//        structree: store.structree,
        users: store.users,
//        global: store.global,
    }),
    dispatch => {
        return {
            //getStrucTreeAction: () => dispatch(getStrucTree()),
            getUsersAction: () => dispatch(getUsers()),
            //getUserAction: (id) => dispatch(getUser(id)),
            //setNodeAction: (node) => dispatch(setNode(node)),
            //getMenuPointAction: (id) => dispatch(getMenuPoint(id)),
            //setCurrentIdAction: (id) => dispatch(setCurrentId(id)),
            //getStrucDashAction: (node) => dispatch(getStrucDash(node)),
            //addPadAction: (id, name) => dispatch(addPad(id, name)),
        };
    },
)(Report);
