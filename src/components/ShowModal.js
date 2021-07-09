import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './modal/Modal';
import { InputUser } from './InputUser';
import { Button } from './button/Button';
// import { v4 as uuidv4 } from 'uuid';

class ShowModal extends Component {
  
  // addCheque  = this.props.addCheque
   constructor(props) {
     super(props);
     // console.log('props = ', props);
     const { userArray } = this.props;
     this.state = {
         isOpen: false,
    //    Phone_01: this.props.userArray.Phone_01,
    //    Phone_02: this.props.userArray.Phone_02,
    //    Phone_03: this.props.userArray.Phone_03,
    //    Phone_04: this.props.userArray.Phone_04,
    //    Email_01: this.props.userArray.Email_01,
    //    Email_02: this.props.userArray.Email_02,
    //    Email_03: this.props.userArray.Email_03,
    //    Email_04: this.props.userArray.Email_04,
    //  Phone_01: (userArray.length>0) ? userArray.Phone_01 : '',
    //  Phone_02: userArray.Phone_02,
        Phone_01: '',
        Phone_02: '',
        Phone_03: '',
        Phone_04: '',
        Email_01: '',
        Email_02: '',
        Email_03: '',
        Email_04: '',
        obj: 0,
     }
   }

 // state = {
 //     isOpen: false,
 //     Phone_01: '',
 //     Phone_02: '',
 //     Phone_03: '',
 //     Phone_04: '',
 //     Email_01: '',
 //     Email_02: '',
 //     Email_03: '',
 //     Email_04: '',
 // }
  
  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
    // console.log('this.state.data.dateReg = ', this.state.data.dateReg);
    //this.setState({data: 
    //  {
    //    Phone_01: '',
    //    Phone_02: '',
    //    Phone_03: '',
    //    Phone_04: '',
    //    Email_01: '',
    //    Email_02: '',
    //    Email_03: '',
    //    Email_04: '',
    //  },
    //}, this.CallAddCheque);
    // let data = this.state.data;
    // console.log('ShowModal this.state = ', this.state);
    if (this.props.userArray.length === 0) {
        console.log('ShowModal this.state = ', this.state);
        console.log('ShowModal this.props.Node = ', this.props.Node);
        this.props.userAddReload(this.props.Node, this.state.obj,
          this.state.Phone_01, this.state.Phone_02, this.state.Phone_03, this.state.Phone_04,
          this.state.Email_01, this.state.Email_02, this.state.Email_03, this.state.Email_04)
    } else {    
        // console.log('ShowModal this.props.editUser = ', this.props.editUser);
        this.props.userReload(this.props.Node,     this.state.obj,
                          this.state.Phone_01, this.state.Phone_02, this.state.Phone_03, this.state.Phone_04,
                          this.state.Email_01, this.state.Email_02, this.state.Email_03, this.state.Email_04)
    }
    // this.props.editUser(this.props.userArray[0].Dept_id,this.state.Phone_01,this.state.Phone_02,this.state.Phone_03,this.state.Phone_04,
    //                                                     this.state.Email_01,this.state.Email_02,this.state.Email_03,this.state.Email_04);
    // this.props.getUser(this.props.Node);
  }

  // componentDidMount() {
  //   console.log("this.state =", this.state);
  // }

  // CallAddCheque = () => {
  //     this.props.addCheque(this.state.fulldata);
  // }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  // updateData = (value) => {
  //   console.log('updateData = ', value);
  //   // this.setState({ data: value }, this.handleSubmit)
  //   this.setState({ data: value }, this.CallCheckData)
  // }

  updateUser = (e) => {
    const { id, value } = e.currentTarget
    // console.log('updateUser id = ', id);
    // console.log('updateUser v = ', value);
    // this.setState({ data: value }, this.handleSubmit)
    this.setState({ [id]: value }, console.log('this.state = ', this.state));
  }

  // CallCheckData = () => {
  //   console.log('CallCheckData data = ',this.state.data);
  // }  

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('getDerivedStateFromProps props = ', nextProps.userArray[0]);
    // console.log('getDerivedStateFromProps state = ', prevState.Phone_01);
    
    if (nextProps.userArray[0] === undefined)
    {
      console.log('ShowModal undefined value!');
      return null;
    } else {
      if (nextProps.userArray[0].Phone_01 !== prevState.Phone_01 || nextProps.userArray[0].Phone_02 !== prevState.Phone_02 
       || nextProps.userArray[0].Phone_03 !== prevState.Phone_03 || nextProps.userArray[0].Phone_04 !== prevState.Phone_04
       || nextProps.userArray[0].Email_01 !== prevState.Email_01 || nextProps.userArray[0].Email_02 !== prevState.Email_02
       || nextProps.userArray[0].Email_03 !== prevState.Email_03 || nextProps.userArray[0].Email_04 !== prevState.Email_04
       || nextProps.userArray[0].obj !== prevState.obj) {
        //console.log('nextProps.userArray[0].Phone_01 = ', nextProps.userArray[0].Phone_01);
        //console.log('prevState.Phone_01 = ', prevState.Phone_01);
        //console.log('prevState.isOpen = ', prevState.isOpen);
        if (prevState.isOpen) {
        return null; }
      }
  
      // console.log('getDerivedStateFromProps props = ', nextProps.userArray[0].Phone_01);
      return {
        Phone_01: nextProps.userArray[0].Phone_01,
        Phone_02: nextProps.userArray[0].Phone_02,
        Phone_03: nextProps.userArray[0].Phone_03,
        Phone_04: nextProps.userArray[0].Phone_04,
        Email_01: nextProps.userArray[0].Email_01,
        Email_02: nextProps.userArray[0].Email_02,
        Email_03: nextProps.userArray[0].Email_03,
        Email_04: nextProps.userArray[0].Email_04,
        obj: nextProps.userArray[0].obj,
      }  
    }
    //if (props.Phone_01 !== state.Phone_01) {
      //return {
        //Phone_01: nextProps.userArray[0],
        // Phone_01: (nextProps.userArray[0].length>0) ? nextProps.userArray[0].Phone_01 : '',
        // Phone_01: '', // props.Phone_01,
        // Phone_02: '', // props.Phone_02,
        //this.setState( {Phone_03: this.props.userArray[0].Phone_03}),
        //this.setState( {Phone_04: this.props.userArray[0].Phone_04}),
        //this.setState( {Email_01: this.props.userArray[0].Email_01}),
        //this.setState( {Email_02: this.props.userArray[0].Email_02}),
        //this.setState( {Email_03: this.props.userArray[0].Email_03}),
        //this.setState( {Email_04: this.props.userArray[0].Email_04}),
      //}
    //} else { 
    //  return null;
    //}  
  }

  render() {
    // let 
    const { userArray } = this.props;
    const { OBJArray} = this.props;
    // console.log("ShowModal OBJArray = ", OBJArray);
    // console.log("ShowModal userArray = ", userArray);
    // const { editUser} = this.props;
    // console.log("ShowModal this.props = ", this.props);
//    Phone_01: this.props.userArray.Phone_01,
//    Phone_02: this.props.userArray.Phone_02,
//    Phone_03: this.props.userArray.Phone_03,
//    Phone_04: this.props.userArray.Phone_04,
//    Email_01: this.props.userArray.Email_01,
//    Email_02: this.props.userArray.Email_02,
//    Email_03: this.props.userArray.Email_03,
//    Email_04: this.props.userArray.Email_04,
if (userArray.length>0) {
//  console.log("ShowModal userArray.length = ",userArray.length);
//  console.log("ShowModal userArray = ",userArray[0]);
//  console.log("ShowModal this.state = ",this.state);
//  this.setState({Phone_01: userArray[0].Phone_01});
}
    // this.setState({Phone_01: this.props.userArray[0].Phone_01})
    return (
      <Fragment>
        <Button onClick={this.openModal}>Редактировать</Button>
        <Modal
          title="Редактирование данных"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          nameCancel='Отменить'
          nameSubmit='Сохранить'
        >
            <InputUser>
            {this.state}
            {this.updateUser}
            {OBJArray}
            </InputUser>
        </Modal>
      </Fragment>
    );
  }
}

ShowModal.propTypes = {
  editUser:   PropTypes.func,
  getUser:    PropTypes.func,
  Node:       PropTypes.string,
}

ShowModal.defaultProps = {
  editUser: () => {},
  getUser:  () => {},
  Node:     '',
}

export { ShowModal };
