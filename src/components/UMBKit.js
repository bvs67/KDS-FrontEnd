import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class UMBKit extends React.Component {
    constructor(props) {
        super(props);
         // console.log('InputUser props = ', props);
         // console.log('InputUser props ch = ', props.children[1]);
        this.state = {compArray: [],
            //{qnum: "1", id:0, sh_name: '', sh_quant: '', sh_weight: '', sh_serial: '', sh_inventory: '', Dept_id: ''},
            //{qnum: "2", id:0, sh_name: '', sh_quant: '', sh_weight: '', sh_serial: '', sh_inventory: '', Dept_id: ''},
            //{qnum: "3", id:0, sh_name: '', sh_quant: '', sh_weight: '', sh_serial: '', sh_inventory: '', Dept_id: ''},
            //{qnum: "4", id:0, sh_name: '', sh_quant: '', sh_weight: '', sh_serial: '', sh_inventory: '', Dept_id: ''},
            //{qnum: "5", id:0, sh_name: '', sh_quant: '', sh_weight: '', sh_serial: '', sh_inventory: '', Dept_id: ''},
            //{qnum: "6", id:0, sh_name: '', sh_quant: '', sh_weight: '', sh_serial: '', sh_inventory: '', Dept_id: ''},
            //],
        }
        this.handleInput = this.handleInput.bind(this);
    }
  
    handleInput = (e) => {
        const { id, value } = e.currentTarget
            // console.log('updateKit id = ', id);
            // console.log('updateKit v = ', value);
            const i_id = id.slice(0,1);
            const name_id = id.slice(1);
            // console.log('i id = ', i_id);
            // console.log('name id = ', name_id);
            // console.log('this.state.compArray[0].sh_name = ', this.state.compArray[0].sh_name);
            // this.setState({ data: value }, this.handleSubmit)
        //this.setState({ [id]: value }, console.log('this.state = ', this.state));    
        const newArray = this.state.compArray;
        newArray[i_id][name_id] = value;
        this.setState({ compArray: newArray }, console.log('this.state = ', this.state));
    }

    onBtnClick = () => {
        // console.log("CurrentComp1 =", this.props.CurrentComp);
        // this.props.compReload(this.props.CurrentComp);
        // let json = JSON.stringify(this.state.compArray);
        // let json = JSON.stringify(this.state.compArray.slice(0,2));
        // console.log('this.state json = ', json)
        if (this.state.compArray.length === 0) {
            console.log('this.state.compArray.length === 0')
            this.props.newKit(this.props.CurrentComp,'server','');
            this.props.newKit(this.props.CurrentComp,'Сервер УМБ','Сервер УМБ');
            this.props.newKit(this.props.CurrentComp,'АРМ Супер','АРМ Супер');
            this.props.newKit(this.props.CurrentComp,'МЭ','МЭ');
            this.props.newKit(this.props.CurrentComp,'Место установки','Место установки');
            this.props.newKit(this.props.CurrentComp,'inventory','');
        } else {
            for (let kitSTR of this.state.compArray) {
                // console.log('kitSTR = ', kitSTR)
                let json = JSON.stringify(kitSTR);
                // console.log('this.state json = ', json)
                this.props.saveKit(json);
            }
        }
        // this.props.saveKit(json);
    };

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log("CurrentComp =", this.props.CurrentComp);
        // console.log("prevProps.CurrentComp =", prevProps.CurrentComp);
        if (this.props.CurrentComp !== prevProps.CurrentComp) {
            this.props.compReload(this.props.CurrentComp);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log('getDerivedStateFromProps props = ', nextProps.userArray[0]);
        // console.log('getDerivedStateFromProps state = ', prevState.Phone_01);
        
        if (nextProps.compArray === undefined)
        {
          console.log('UMBKit undefined value!');
          return null;
        } else {
          //if (nextProps.userArray[0].Phone_01 !== prevState.Phone_01 || nextProps.userArray[0].Phone_02 !== prevState.Phone_02 
          // || nextProps.userArray[0].Phone_03 !== prevState.Phone_03 || nextProps.userArray[0].Phone_04 !== prevState.Phone_04
          // || nextProps.userArray[0].Email_01 !== prevState.Email_01 || nextProps.userArray[0].Email_02 !== prevState.Email_02
          // || nextProps.userArray[0].Email_03 !== prevState.Email_03 || nextProps.userArray[0].Email_04 !== prevState.Email_04) {
          //  if (prevState.isOpen) {
          //  return null; }
          //}
      
          // console.log('getDerivedStateFromProps props = ', nextProps.userArray[0].Phone_01);
          return {
            compArray: nextProps.compArray,
          }  
        }
      }
    

    _onClick = (e) => {
        // e.preventDefault();
        console.log('По ссылке кликнули =', e);
        //console.log('CurrentRow =', this.props.Node);
        // this.props.setNode(e);
        this.props.setCurNodeId(e);
        this.props.getMenuPoint(1);
    };

    renderComp1 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.state.compArray.map(arrLine => {
            if(arrLine.qnum==="1")
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">
                    <input
                        id='0sh_name'
                        type='text'
                        value={arrLine.sh_name}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='0sh_quant'
                        type='text'
                        value={arrLine.sh_quant}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='0sh_weight'
                        type='text'
                        value={arrLine.sh_weight}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='0sh_serial'
                        type='text'
                        value={arrLine.sh_serial}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='0sh_inventory'
                        type='text'
                        value={arrLine.sh_inventory}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp2 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="2")
            return (
                <tr key={arrLine.id}>
                    <td className="greyLine">
                    <input
                        id='1sh_name'
                        type='text'
                        value={arrLine.sh_name}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="greyLine">
                    <input
                        id='1sh_quant'
                        type='text'
                        value={arrLine.sh_quant}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="greyLine">
                    <input
                        id='1sh_weight'
                        type='text'
                        value={arrLine.sh_weight}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="greyLine">
                    <input
                        id='1sh_serial'
                        type='text'
                        value={arrLine.sh_serial}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="greyLine">
                    <input
                        id='1sh_inventory'
                        type='text'
                        value={arrLine.sh_inventory}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp3 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="3")
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">
                    <input
                        id='2sh_name'
                        type='text'
                        value={arrLine.sh_name}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='2sh_quant'
                        type='text'
                        value={arrLine.sh_quant}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='2sh_weight'
                        type='text'
                        value={arrLine.sh_weight}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='2sh_serial'
                        type='text'
                        value={arrLine.sh_serial}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='2sh_inventory'
                        type='text'
                        value={arrLine.sh_inventory}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp4 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="4")
            return (
                <tr key={arrLine.id}>
                <td className="greyLine">
                <input
                    id='3sh_name'
                    type='text'
                    value={arrLine.sh_name}
                    onChange={this.handleInput}
                    className='inputName'
                  />
                </td>
                <td className="greyLine">
                <input
                    id='3sh_quant'
                    type='text'
                    value={arrLine.sh_quant}
                    onChange={this.handleInput}
                    className='inputName'
                  />
                </td>
                <td className="greyLine">
                <input
                    id='3sh_weight'
                    type='text'
                    value={arrLine.sh_weight}
                    onChange={this.handleInput}
                    className='inputName'
                  />
                </td>
                <td className="greyLine">
                <input
                    id='3sh_serial'
                    type='text'
                    value={arrLine.sh_serial}
                    onChange={this.handleInput}
                    className='inputName'
                  />
                </td>
                <td className="greyLine">
                <input
                    id='3sh_inventory'
                    type='text'
                    value={arrLine.sh_inventory}
                    onChange={this.handleInput}
                    className='inputName'
                  />
                </td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp5 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="5")
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">
                    <input
                        id='4sh_name'
                        type='text'
                        value={arrLine.sh_name}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='4sh_quant'
                        type='text'
                        value={arrLine.sh_quant}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='4sh_weight'
                        type='text'
                        value={arrLine.sh_weight}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='4sh_serial'
                        type='text'
                        value={arrLine.sh_serial}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                    <td className="whiteLine">
                    <input
                        id='4sh_inventory'
                        type='text'
                        value={arrLine.sh_inventory}
                        onChange={this.handleInput}
                        className='inputName'
                      />
                    </td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp6 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="6")
            return (
                <tr key={arrLine.id}>
                    <td className="greyLine">{arrLine.sh_name}</td>
                    <td className="greyLine">{<a href="#" onClick={this._onClick.bind(this, arrLine.Dept_id)}>{arrLine.sh_quant}</a>}</td>
                    <td className="greyLine">
                        <input
                            id='5sh_quant'
                            type='text'
                            value={arrLine.sh_quant}
                            onChange={this.handleInput}
                            className='inputName'
                        />
                    </td>
                    <td className="greyLine">{arrLine.sh_serial}</td>
                    <td className="greyLine">{arrLine.sh_inventory}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    render() {
        const { compArray, isFetching } = this.props; // вытащили isFetching
        // console.log('compArray R =', compArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Состав комплекта УМБ</h4>
                <table>
                    <tbody>
                        <tr key="1" className="whiteHeadline">
                            <td>Server</td>
                            <td>Model</td>
                            <td>Proc</td>
                            <td>RAM(Gb)</td>
                            <td>HDD(Gb)</td>
                        </tr>
                        {this.renderComp1()}
                        <tr key="2" className="whiteline">
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr key="3" className="whiteHeadline">
                            <td>Server Инв.№</td>
                            <td>Server S/N</td>
                            <td>МЭ Model</td>
                            <td>МЭ MAC</td>
                            <td>МЭ S/N</td>
                        </tr>
                        {this.renderComp2()}
                        <tr key="4" className="whiteline">
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr key="5" className="whiteHeadline">
                            <td>Тип объекта</td>
                            <td>Ip-адрес</td>
                            <td>Маска подсети</td>
                            <td>Шлюз</td>
                            <td> </td>
                        </tr>
                        {this.renderComp3()}
                        {this.renderComp4()}
                        {this.renderComp5()}
                        {this.renderComp6()}
                        </tbody>
                </table>

                <button className="buttons" onClick={this.onBtnClick}>
                    Save Data
                </button>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {compArray.length} строк.</p>
                )}
            </React.Fragment>
        );
    }
}

UMBKit.propTypes = {
    compArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    CurrentComp: PropTypes.number,
};

UMBKit.defaultProps = {
    compArray: [],
    // [{id: 3,
    //    sh_name: "HP ProLiant",
    //    sh_quant: "ML110 G5",
    //    sh_weight: "Dual CPU E2160",
    //    sh_serial: "4",
    //    sh_inventory: "3,5\"_250*2",
    //    Dept_id: "4354473C-325D-4BE3-B416-BECA810ACB8D",
    //    }],     
    isFetching: false,
    CurrentComp: 0,
};
