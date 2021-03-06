import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class ExcelReport extends React.Component {

    onBtnClick = () => {
        this.props.getUsers();
    };

    componentDidMount() {
        this.props.getUsers();
    }

//    componentDidUpdate(prevProps) {
//        // Популярный пример (не забудьте сравнить пропсы):
//        // console.log('componentDidUpdate =', this.props.CurrentObj)
//        // const { OBJArray } = this.props;
//        // console.log(OBJArray);
//        // console.log(this.props);
//        if (this.props.Node !== prevProps.Node) {
//          // this.fetchData(this.props.userID);
//          // this.props.getHistory(this.props.CurrentObj);
//          this.props.getUser(this.props.Node);
//        }
//    }

//    _onClick = (e) => {
//        // e.preventDefault();
//        console.log('По ссылке кликнули =', e);
//        console.log('CurrentRow =', this.props.Node);
//        this.props.setCurrentId(e);
//        this.props.getMenuPoint(3);
//        // this.props.setHistory(e);
//        // this.props.setNode(e);
//    };

    renderUsers = () => {
        let lineObj = null;
        lineObj = this.props.dataArray.map(arrLine => {
            return (
                <tr key={arrLine[0]}>
                    <td className="tableMain">{arrLine[1]}</td>
                    <td className="tableMain">{arrLine[2]}</td>
                    <td className="tableMain">{arrLine[3]}</td>
                    <td className="tableMain">{arrLine[4]}</td>
                    <td className="tableMain">{arrLine[5]}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

//    renderUser = () => {
//        let lineObj = null;
//        // console.log('userArray', this.props.userArray);
//        lineObj = this.props.userArray.map(arrLine => {
//            return (
//                <tbody>
//                <tr key={arrLine.Dept_id+"_01"}>
//                    <td className="tableMain">{arrLine.Phone_01}</td>
//                    <td className="tableMain">{arrLine.Phone_02}</td>
//                    <td className="tableMain">{arrLine.Phone_03}</td>
//                    <td className="tableMain">{arrLine.Phone_04}</td>
//                </tr>
//                <tr key={arrLine.Dept_id+"_02"}>
//                <td className="tableMain">{arrLine.Email_01}</td>
//                <td className="tableMain">{arrLine.Email_02}</td>
//                <td className="tableMain">{arrLine.Email_03}</td>
//                <td className="tableMain">{arrLine.Email_04}</td>
//            </tr>
//            <tr key={arrLine.Dept_id+"_03"}>
//                <td colSpan="3" className="tableMain">Место установки</td>
//                <td className="tableMain">{<a href="#" onClick={this._onClick.bind(this, arrLine.id)}>{arrLine.HComment}</a>}</td>
//            </tr>
//            </tbody>
//);
//        }, this);
//        return lineObj;
//    };

    render() {
        const { dataArray, isFetching } = this.props; // вытащили isFetching
        // console.log('dataArray', dataArray);
        // console.log('userArray', userArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Пользователи</h4>

                <table>
                    <thead>
                        <tr className="whiteHeadline">
                            <td className="tableMain">Подразделение</td>
                            <td className="tableMain">Пользователь</td>
                            <td className="tableMain">Телефон</td>
                            <td className="tableMain">Почта</td>
                            <td className="tableMain">Код</td>
                        </tr>
                    </thead>
                    <tbody>{this.renderUsers()}</tbody>
                </table>

                <button className="buttons" onClick={this.onBtnClick}>
                    Load Data
                </button>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {dataArray.length} пользователей.</p>
                )}
            </React.Fragment>
        );
    }
}

ExcelReport.propTypes = {
    dataArray: PropTypes.array,
    // userArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    Node: PropTypes.string,
};

ExcelReport.defaultProps = {
    dataArray: [1, 2, 3, 4, 5],
    // userArray: [],
    isFetching: false,
    Node: "0",
};

//userArray: [{Dept_id: 1,
//    Name: 2,
//    Phone_01: 3,
//    Email_01: 4,
//    HComment: 5, }],
