import React from 'react';
import PropTypes from 'prop-types'

class InputUser extends React.Component {
    constructor(props) {
        super(props);
         // console.log('InputUser props = ', props);
         // console.log('InputUser props ch = ', props.children[1]);
        // this.state = {
        //     Phone_01: props.children[0].Phone_01,
        //     Phone_02: props.children[0].Phone_02,
        //     Phone_03: props.children[0].Phone_03,
        //     Phone_04: props.children[0].Phone_04,
        //     Email_01: props.children[0].Email_01,
        //     Email_02: props.children[0].Email_02,
        //     Email_03: props.children[0].Email_03,
        //     Email_04: props.children[0].Email_04,
        // }
        this.handleInput = this.handleInput.bind(this);
    }
  
    handleInput(e) {
        // const { id, value } = e.currentTarget
        // this.setState({ [id]: value }, this.CallUpdateData);
        // console.log('e = ', e.currentTarget.value);
        // this.props.updateUser(e);
        this.props.children[1](e);
    }

    // _onChange = e => {
    //   this.objSelect = e.target.value;
    //   // console.log(e.target.value)
    //   console.log('_onChange =', this.objSelect)
    // };

    // componentDidMount() {
    //   // this.props.loadOBJ();
    //   let Phone_01 = this.props.children[0].Phone_01;
    //   console.log("this.props =", Phone_01);
    //   let id = document.getElementById('Phone_01') // .value = Phone_01;
    //   console.log("this.props id =", id);
    // }

    render() {
        // const textInput = this.state.textInput;
        // this.props.data.uid = uuidv4().toUpperCase();
        // this.objSelect = React.createRef();
        // this.objSelect = '100';
        // console.log('_onChange =', this.objSelect)
        const userArray = this.props.children[0];
        const OBJArray = this.props.children[2];
        // console.log("InputUser OBJArray = ", OBJArray);
        // console.log('this.Phone_01 = ', this.props.children[0])
        // console.log('InputUser userArray = ', userArray)
        // console.log('this.Phone_01 = ', this.props.children[0]); value={userArray.Phone_01}
        // console.log('Input User userArray = ', this.props);
        return (
            <React.Fragment>
            <table>
              <thead>
                  <tr className="whiteHeadline">
                      <td className="tableMain">Тел/почта</td>
                      <td className="tableMain">Супервайзер</td>
                      <td className="tableMain">Мастер</td>
                      <td className="tableMain">ГТИ</td>
                      <td className="tableMain">ННБ</td>
                  </tr>
              </thead>
              <tbody>
                <tr key="tbl_01">
                    <td className="whiteHeadline">Телефон</td>
                    <td className="tableMain">
                      <input
                        id='Phone_01'
                        type='text'
                        value={userArray.Phone_01}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="tableMain">
                      <input
                        id='Phone_02'
                        type='text'
                        value={userArray.Phone_02}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="tableMain">
                      <input
                        id='Phone_03'
                        type='text'
                        value={userArray.Phone_03}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="tableMain">
                      <input
                        id='Phone_04'
                        type='text'
                        value={userArray.Phone_04}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                </tr>
                <tr key="tbl_02">
                  <td className="whiteHeadline">Почта</td>                    
                  <td className="tableMain">
                      <input
                        id='Email_01'
                        type='text'
                        value={userArray.Email_01}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="tableMain">
                      <input
                        id='Email_02'
                        type='text'
                        value={userArray.Email_02}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="tableMain">
                      <input
                        id='Email_03'
                        type='text'
                        value={userArray.Email_03}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="tableMain">
                      <input
                        id='Email_04'
                        type='text'
                        value={userArray.Email_04}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                </tr>
                <tr key="tbl_03">
                  <td className="whiteHeadline">Объект</td>                    
                  <td className="tableMain">
                      <select id='obj' onChange={this.handleInput} defaultValue={userArray.obj}>
                        {OBJArray.map(arrLine => {
                            return (
                                <option key={arrLine.id} value={arrLine.id}>
                                    {arrLine.NameMS} - {arrLine.NameKT}
                                </option>
                            );
                        })}
                      </select>
                    </td>
                    <td colSpan="3" className="tableMain">
                      -
                    </td>
                </tr>
              </tbody>
            </table>
            </React.Fragment>
        );
    }
}

InputUser.propTypes = {
    updateUser:    PropTypes.func,
}

InputUser.defaultProps = {
    updateUser:  () => {},
}

export { InputUser }
