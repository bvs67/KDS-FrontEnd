import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Obj } from '../components/Obj';
import { History } from '../components/History';
import { UMBKit } from '../components/UMBKit';
import {
    loadOBJ,
    saveAndReload,
    deleteObj,
    toggleMode,
    toggleEdit,
    cancelEdit,
    savedObj,
    addObj,
    loadGRCOMP,
    setHistory,
} from '../actions/ObjActions';
import { 
    histReload,
    toggleHistMode,
    toggleHistEdit,
    savedHist,
    cancelHistEdit,
    deleteHist,
    addHist,
 } from '../actions/HistoryActions';
 import { 
    compReload,
    saveKit,
    newKit,
} from '../actions/CompActions';
import { getMenuPoint } from '../actions/MenuActions';
import { setCurNodeId } from '../actions/GlobalActions';

 export class Admin extends Component {
    render() {
        const {
            obj,
            loadOBJAction,
            setHistoryAction,
            saveAndReloadAction,
            deleteObjAction,
            toggleModeAction,
            toggleEditAction,
            cancelEditAction,
            savedObjAction,
            addObjAction,
            loadGRCOMPAction,
            history,
            histReloadAction,
            toggleHistModeAction,
            toggleHistEditAction,
            savedHistAction,
            cancelHistEditAction,
            deleteHistAction,
            addHistAction,
            umbkit,
            compReloadAction,
            saveKitAction,
            newKitAction,
            getMenuPointAction,
            setCurNodeIdAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        <Obj 
                            OBJArray={obj.OBJArray}
                            loadOBJ={loadOBJAction}
                            isFetching={obj.isFetching}
                            AddMode={obj.AddMode}
                            EditMode={obj.EditMode}
                            EditKey={obj.EditKey}
                            saveAndReload={saveAndReloadAction}
                            deleteObj={deleteObjAction}
                            toggleMode={toggleModeAction}
                            toggleEdit={toggleEditAction}
                            cancelEdit={cancelEditAction}
                            savedObj={savedObjAction}
                            addObj={addObjAction}
                            tmp={obj.tmp}
                            GRCOMPArray={obj.GRCOMPArray}
                            loadGRCOMP={loadGRCOMPAction}
                            setHistory={setHistoryAction}
                            CurrentRow={obj.CurrentRow}
                        />
                    </div>
                    <div id="data-block">
                        <UMBKit
                            compArray={umbkit.compArray}
                            isFetching={umbkit.isFetching}
                            compReload={compReloadAction}
                            CurrentComp={obj.CurrentRow}
                            getMenuPoint={getMenuPointAction}
                            setCurNodeId={setCurNodeIdAction}
                            saveKit={saveKitAction}
                            newKit={newKitAction}
                        />
                    </div>
                    <div id="history-block">
                        <History
                            histArray={history.histArray}
                            isFetching={history.isFetching}
                            histReload={histReloadAction}
                            toggleHistMode={toggleHistModeAction}
                            AddHistMode={history.AddHistMode}
                            HCOMArray={history.HCOMArray}
                            toggleHistEdit={toggleHistEditAction}
                            EditHistMode={history.EditHistMode}
                            EditHistKey={history.EditHistKey}
                            savedHist={savedHistAction}
                            cancelHistEdit={cancelHistEditAction}
                            deleteHist={deleteHistAction}
                            addHist={addHistAction}
                            CurrentObj={obj.CurrentRow}
                        />
                    </div>
                </div>
        );
    }
}

export default connect(
    store => ({
        obj: store.obj,
        history: store.history,
        umbkit: store.umbkit,
    }),
    dispatch => {
        return {
            loadOBJAction: () => dispatch(loadOBJ()),
            saveAndReloadAction: () => dispatch(saveAndReload()),
            deleteObjAction: tmp => dispatch(deleteObj(tmp)),
            toggleModeAction: mode => dispatch(toggleMode(mode)),
            toggleEditAction: key => dispatch(toggleEdit(key)),
            cancelEditAction: key => dispatch(cancelEdit(key)),
            savedObjAction: (name, id) => dispatch(savedObj(name, id)),
            addObjAction: (OG, Name) => dispatch(addObj(OG, Name)),
            loadGRCOMPAction: () => dispatch(loadGRCOMP()),
            setHistoryAction: key => dispatch(setHistory(key)),
            histReloadAction: key => dispatch(histReload(key)),
            toggleHistModeAction: mode => dispatch(toggleHistMode(mode)),
            toggleHistEditAction: key => dispatch(toggleHistEdit(key)),
            savedHistAction: (obj, h_beg, h_end, key) => dispatch(savedHist(obj, h_beg, h_end, key)),
            cancelHistEditAction: key => dispatch(cancelHistEdit(key)),
            deleteHistAction: (obj, key) => dispatch(deleteHist(obj, key)),
            addHistAction: (obj, h_beg, h_com, id_prev) => dispatch(addHist(obj, h_beg, h_com, id_prev)),
            compReloadAction: key => dispatch(compReload(key)),
            saveKitAction: (json) => dispatch(saveKit(json)),
            newKitAction: (obj,type,name) => dispatch(newKit(obj,type,name)),
            getMenuPointAction: (id) => dispatch(getMenuPoint(id)),
            setCurNodeIdAction: (id) => dispatch(setCurNodeId(id)),
        };
    },
)(Admin);
