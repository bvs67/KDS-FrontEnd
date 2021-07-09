import React from 'react';
import PropTypes from 'prop-types';
//import './KDStyle.css';
// import { History } from '../components/History';

export class StrucPad extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            codeInput: '',
            nameInput: '',
            textInput: '',
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.id);
        // console.log(e.currentTarget.value);
        const { id, value } = e.currentTarget
        // this.setState({ [id]: e.currentTarget.value })
        this.setState({ [id]: value })
    }
  
    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log('componentDidUpdate =', this.props.CurrentObj)
        // const { OBJArray } = this.props;
        // console.log(OBJArray);
        // console.log(this.props);
        if (this.props.Node !== prevProps.Node) {
            // this.fetchData(this.props.userID);
            // this.props.getHistory(this.props.CurrentObj);
            console.log("Current Node =",this.props.Node);
            // const sArr = this.props.StrucArray;
            // console.log(sArr);
            this.setState({ 'textInput': this.props.Node});
            const { textInput } = this.state;
            // console.log("Current Node =",textInput);
        }
    }

    _onClick = () => {
        // e.preventDefault();
        //console.log('По ссылке кликнули =', e);
        const { codeInput, nameInput, textInput } = this.state;
        console.log('onSaveClick 1 =', codeInput);
        console.log('onSaveClick 2 =', nameInput);
        console.log('onSaveClick 3 =', textInput);
        this.props.addPad(codeInput, nameInput);
        //console.log('CurrentRow =', this.props.Node);
        //this.props.setCurrentId(e);
        //this.props.getMenuPoint(3);
        // this.props.setHistory(e);
        // this.props.setNode(e);
    };

    _onDelete = () => {
        // e.preventDefault();
        //console.log('По ссылке кликнули =', e);
        const { textInput } = this.state;
        console.log('onDeleteClick =', textInput);
        this.props.delPad(textInput);
        //console.log('CurrentRow =', this.props.Node);
        //this.props.setCurrentId(e);
        //this.props.getMenuPoint(3);
        // this.props.setHistory(e);
        // this.props.setNode(e);
    };

    render() {
        const textInput = this.state.textInput;
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Добавить куст</h4>
                <div>Код
                    <input
                        id='codeInput'
                        type='text'
                        onChange={this.handleInput}
                        className='inputCode'
                        placeholder='Код куста'
                    />
                </div>
                <div>Наименование
                    <input
                        id='nameInput'
                        type='text'
                        onChange={this.handleInput}
                        className='inputName'
                        placeholder='Наименование куста'
                    />
                </div>
                <div>
                <button onClick={this._onClick.bind(this)}>
                    Добавить куст
                </button>
                </div>
                <br></br>
                <div>
                    <label>Месторождение
                    <input
                        id='textInput'
                        type='text'
                        value={textInput}
                        onChange={this.handleInput}
                        className='inputCode'
                        placeholder='Месторождение куста'
                    />
                    </label>
                </div>
                <div>
                <button onClick={this._onDelete.bind(this)}>
                    Удалить куст
                </button>
                </div>
            </React.Fragment>
        );
    }
}

//StrucPad.propTypes = {
//    strucArray: PropTypes.array,
//    CurrentNode: PropTypes.string,
//    isFetching: PropTypes.bool.isRequired,
//    CurNodeId: PropTypes.string,
//};
//
//StrucPad.defaultProps = {
//    strucArray: [],
//    CurrentNode: "0",
//    isFetching: false, // изначально статус загрузки - ложь
//    CurNodeId: "0",
//};
