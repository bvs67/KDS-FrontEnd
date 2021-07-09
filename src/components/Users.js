import React from 'react';
import PropTypes from 'prop-types';
import { ShowModal } from './ShowModal';
import './KDStyle.css';

export class Users extends React.Component {

    //onBtnClick = () => {
    //    this.props.getUsers();
    //};
    //
    //componentDidMount() {
    //    this.props.getUsers();
    // }

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            IdInput: '',
            EmpInput: '',
            ODetInput: '',
        }
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(e) {
        const { id, value } = e.currentTarget
         console.log('id = ', id);
         console.log('value = ', value);
        // console.log('this.props.data = ', this.props.data);
        this.setState({ [id]: value }, console.log('this.state = ', this.state));
    }

    componentDidMount() {
        this.props.loadOBJ();
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
          this.props.getUser(this.props.Node);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log('getDerivedStateFromProps props = ', nextProps.userArray[0]);
        // console.log('getDerivedStateFromProps nextProps = ', nextProps.userArray[0]);
        if (nextProps.userArray[0] === undefined)
        {
          console.log('Users undefined value!');
          return null;
        } else {
            // console.log('getDerivedStateFromProps nextProps.emp_id = ', nextProps.userArray[0].emp_id);
            // console.log('getDerivedStateFromProps nextProps.odet_id = ', nextProps.userArray[0].odet_id);
          return {
            EmpInput: nextProps.userArray[0].emp_id,
            ODetInput: nextProps.userArray[0].odet_id,
          }
        }
    }

    _onClick = (e) => {
        // e.preventDefault();
        console.log('Users По ссылке кликнули =', e);
        console.log('CurrentRow =', this.props.Node);
        this.props.setCurrentId(e);
        this.props.getMenuPoint(3);
        // this.props.setHistory(e);
        // this.props.setNode(e);
    };

    _onTransfer = (e) => {
        //// e.preventDefault();
        console.log('Перенос на куст Name=', this.state.nameInput);
        console.log('Перенос на куст Id=', this.state.IdInput);
        console.log('CurrentRow =', this.props.Node);
        this.props.userTransReload(this.state.IdInput, this.state.nameInput, this.state.EmpInput, this.state.ODetInput);
        // this.props.transPad(this.IdInput.value, this.nameInput.value, this.EmpInput.value, this.ODetInput.value);
        // pad_id, pad_name, emp_id, odet_id
        this.props.setCurrentId(this.state.IdInput);
        //this.props.getMenuPoint(3);
        //// this.props.setHistory(e);
        //// this.props.setNode(e);
    };

//    renderUsers = () => {
//        let lineObj = null;
//        lineObj = this.props.dataArray.map(arrLine => {
//            return (
//                <tr key={arrLine[0]}>
//                    <td className="tableMain">{arrLine[1]}</td>
//                    <td className="tableMain">{arrLine[2]}</td>
//                    <td className="tableMain">{arrLine[3]}</td>
//                    <td className="tableMain">{arrLine[4]}</td>
//                </tr>
//            );
//        }, this);
//        return lineObj;
//    };

    renderUser = () => {
        let lineObj = null;
        // console.log('userArray', this.props.userArray);
        lineObj = this.props.userArray.map(arrLine => {
            return (
            <tbody>
                <tr key={arrLine.Dept_id+"_01"}>
                    <td className="tableMain">{arrLine.Phone_01}</td>
                    <td className="tableMain">{arrLine.Phone_02}</td>
                    <td className="tableMain">{arrLine.Phone_03}</td>
                    <td className="tableMain">{arrLine.Phone_04}</td>
                </tr>
                <tr key={arrLine.Dept_id+"_02"}>
                    <td className="tableMain">{arrLine.Email_01}</td>
                    <td className="tableMain">{arrLine.Email_02}</td>
                    <td className="tableMain">{arrLine.Email_03}</td>
                    <td className="tableMain">{arrLine.Email_04}</td>
                </tr>
                <tr key={arrLine.Dept_id+"_03"}>
                    <td colSpan="3" className="tableMain">Номер комплекта УМБ</td>
                    <td className="tableMain">{<a href="#" onClick={this._onClick.bind(this, arrLine.obj)}>{arrLine.obj_Name}</a>}</td>
                </tr>
            </tbody>
            );
        }, this);
        return lineObj;
    };

    renderInput() {
        let inputObj = null;
        // console.log('userArray', this.props.userArray);
        // inputObj = this.props.userArray.map(inpLine => {
            return ( 
                <div>
                    <div>
                        <button onClick={this._onTransfer.bind(this)}>
                            Перенести на куст
                        </button>
                    </div>
                    <div>
                    <label>Новый куст: 
                    <input
                        id='nameInput'
                        type='text'
                        value={this.state.nameInput}
                        onChange={this.handleInput}
                        className='inputName'
                        placeholder='Укажите имя куста'
                    />
                    </label>
                    </div>
                    <div>
                    <label>Новый куст id: 
                    <input
                        id='IdInput'
                        type='text'
                        value={this.state.IdInput}
                        onChange={this.handleInput}
                        className='inputName'
                        placeholder='Укажите id куста'
                    />
                    </label>
                    </div>
                    <div>
                    <label>Новый куст Emp id: 
                    <input
                        id='EmpInput'
                        type='text'
                        value={this.state.EmpInput}
                        onChange={this.handleInput}
                        className='inputName'
                        placeholder='Укажите Emp id'
                    />
                    </label>
                    </div>
                    <div>
                    <label>Новый куст ODet id: 
                    <input
                        id='ODetInput'
                        type='text'
                        value={this.state.ODetInput}
                        onChange={this.handleInput}
                        className='inputName'
                        placeholder='Укажите ODet id'
                    />
                    </label>
                    </div>
                </div>
            );
        // }, this);
        // return inputObj;        
    };

    render() {
        const { userArray, OBJArray, isFetching } = this.props; // вытащили isFetching
        // const { emp_id } = this.props;
        // const ODetInput = userArray.emp_id;
        const {editUser} = this.props;
        const {getUser}  = this.props;
        const {addUser}  = this.props;
        const {Node}     = this.props;
        const {userReload} = this.props;
        const {userAddReload} = this.props;
        // console.log('dataArray', dataArray);
        // console.log('Users userArray', userArray);
        // console.log('isFetching', isFetching);
        // console.log('Users state = ', this.state);
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Контактные данные</h4>
                <table width='100%'>
                    <thead>
                        <tr className="whiteHeadline">
                            <td className="tableMain">Супервайзер</td>
                            <td className="tableMain">Мастер</td>
                            <td className="tableMain">ГТИ</td>
                            <td className="tableMain">ННБ</td>
                        </tr>
                    </thead>
                    {this.renderUser()}
                    {this.renderInput()}
                </table>
                <ShowModal
                    userArray = {userArray}
                    OBJArray  = {OBJArray}
                    editUser = {editUser}
                    getUser  = {getUser}
                    Node     = {Node}
                    userReload = {userReload}
                    userAddReload = {userAddReload}
                    addUser  = {addUser}
                />
            </React.Fragment>
        );
    }
}

Users.propTypes = {
    dataArray: PropTypes.array,
    userArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    Node: PropTypes.string,
};

Users.defaultProps = {
    dataArray: [1, 2, 3, 4, 5],
    userArray: [],
    isFetching: false,
    Node: "0",
};

//userArray: [{Dept_id: 1,
//    Name: 2,
//    Phone_01: 3,
//    Email_01: 4,
//    HComment: 5, }],
