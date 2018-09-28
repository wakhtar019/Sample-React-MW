import  React from 'react';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { connect } from 'react-redux';
import {agreementNosAdded} from '../../../actions/action';
 class AddConstraints extends React.Component
 {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      agreementNo:[''],
      agreementNoList:[''],
      agreementNoListInfo:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAgreementNoChange =i=> (evt) => {
    evt.preventDefault();  
    let agreementNo=[...this.state.agreementNo]
    agreementNo[i]=evt.target.value;
    this.setState({ agreementNo});
  }
  handleDelete = i =>(e) => {
    e.preventDefault()
    let agreementNo = [
      ...this.state.agreementNo.slice(0, i),
      ...this.state.agreementNo.slice(i + 1)
    ]
    this.setState({
      agreementNo
    })
  }
  onPush=(agreementNosobj)=>{       
    let agreementList =this.state.agreementNoListInfo;           
    agreementList.push(agreementNosobj);
     this.setState({
      agreementNoListInfo:agreementList
     }
     )
     this.props.updateAgreementNosList(this.state.agreementNoListInfo);

  }
  handleSubmit = (event,name) => {
    event.preventDefault();
    this.state.agreementNoList=this.state.agreementNo;
    let agreementNosData=this.state.agreementNoList;
    let agreementNosobj={'applicationName':name,'agreementsAdded':{agreementNosData}};
    this.onPush(agreementNosobj);
  this._closeModal();
  }
   render() {
     const {agreementNo}=this.state;
     const enableItem=(agreementNo!='') ;
    return (
      <div>
        <div className="additional-constraints">
          <h6>2.Select Additional Constraints</h6>
          <div className="add-agreement-no">
           <span className="add-agreement-modal"><i className="ms-Icon ms-Icon--Add" aria-hidden="true" ></i></span>
            <button onClick={this._showModal} >Add Agreement Number</button>
          </div>
          <div className="agreement-organization-text">
            <div>
              {enableItem && <label> Agreement Number</label>}
            </div>
            <div> {this.state.agreementNoList.map((agtno,index)=>
            (
             <div key={index} ><span>
              {agtno}
              </span></div>))}
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.showModal}
          onDismiss={this._closeModal}
          containerClassName="ms-modalExample-container"
          isBlocking={true}
          className="addConstraint-modal"
        >
          <div className="modal-class">
            <div className="modal-header">
            <h4>Add Agreement</h4>
              <button><i className="ms-Icon ms-Icon--Cancel" aria-hidden="true" onClick={(event)=>this._closeModal(event)}></i></button>
            </div>
            <div className="modal-text">
              <span>Provide an agreement number to provision user to VLCM.</span>
            </div>
            <div className="label-text">
              <label>Agreement Number </label>
              <span className="agreement-number-required"> *</span>
              {!enableItem && <span > Agreement Number cannot be Empty</span>}
            </div>
            <form onSubmit={(event)=>this.handleSubmit(event,this.props.appName)}>
              <div className="agreement-pcnNo">
                {this.state.agreementNo.map((agtno, index) => (
                  <div key={index}>
                    <input key={index} type="number" className="agreement-pcn" id={'txtAgreementPcn-' + index} value={agtno}
                      onChange={this.handleAgreementNoChange(index)} />
                    {enableItem && index ==agreementNo.length-1 && <button><i className="ms-Icon ms-Icon--Add" id={'addAgreementNo-'+index} aria-hidden="true" onClick={this._addInputBox} ></i></button>}
                  {enableItem && index > 0 && <button onClick={this.handleDelete(index)}><i className="ms-Icon ms-Icon--Cancel" aria-hidden="true" ></i></button>}
                  </div>))}
              </div>
              <div className="add-button">
                <button className="uum-button-primary-sm" type="submit" disabled={!enableItem}>Add</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
   _showModal = () => {
    this.setState({ showModal: true });
  };
   _closeModal = ()=> {
    this.state.agreementNo=this.state.agreementNoList;
    this.setState({ showModal: false });
  }
  _addInputBox =(e)=>
  {
    e.preventDefault();
    e.stopPropagation();
    let agreementNo = this.state.agreementNo.concat([''])
    this.setState({
      agreementNo
    })
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    updateAgreementNosList: (isRolesSelected)=>{
        dispatch(agreementNosAdded(isRolesSelected))
    }
  } 
}
export default connect(null,mapDispatchToProps)(AddConstraints);