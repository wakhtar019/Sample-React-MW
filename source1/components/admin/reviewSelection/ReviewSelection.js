import React, { Fragment } from 'react';
import {Row, Col, Label } from 'reactstrap';
import { ButtonToolbar, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import {rolesSelection} from '../../../actions/action';

class ReviewSelection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ReviewData_Application : 'MSQuote',
            ReviewData_Role : 'Administrator',
            ReviewData_Status : 'Request Addition',
            ReviewData_AdditionalConstraints : 'Claims',
            showModal: false,
            rolesSelectionData:[]
        }
    }

    getDetails=(appName)=>{
        let value= "NA";
       let agreementData= this.props.agreementNoListInfo;
       agreementData.map((agtData => 
       {
           if(agtData.applicationName===appName)
       {         
            value ="Claim";
       }      
    }))
    return value;
    }
    _showModal = () => {
        this.setState({ showModal: true });
      };
    
       _closeModal = (e)=> {
        this.setState({ showModal: false });
      }
      goToPath(e,path) {
        e.preventDefault();
        this.props.history.push(path);
      }
      _deleteSelectedRoles=(index)=>
      {
        let selectedRolesInfo ={...this.state};
        selectedRolesInfo.rolesSelectionData.splice(index,1)
        var selectedRolesObj = selectedRolesInfo.rolesSelectionData.slice(0,selectedRolesInfo.rolesSelectionData.length);
        this.props.updateSelectionChange(selectedRolesObj);       
      }

      componentDidMount(){
          this.setState({rolesSelectionData:this.props.rolesSelectionData})
      }
    render(){
        console.log(this.props.rolesSelectionData);
        return(
            <div className="review-selection">
            <div className="section-header"><h4>   User Details > Assign Roles > Review Selection</h4></div>
            <div className="content-area">
            <div className="form-container">           
            <Row>
                 <Col xs={12} sm={12} md={12}>
                    <h5>Review Your Selection</h5>
                 </Col>
             </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12}>
                                    <Label className="reviewText"> Review your selection before before sending for invite to wandahoward@microsoft.com. </Label>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={12} sm={12} md={12}>
                                    <span><a href="/assignRoles" ><i className="ms-Icon ms-Icon--Add reviewAddSelection " aria-hidden="true" > Add another Selection</i> </a></span>  
                                </Col>  
                            </Row>
                    <div className="review-selection-table">       
                    <Row className="reviewTable"> 
                        <Col >
                            <b>Application</b>
                        </Col>
                        <Col >
                            <b>Role</b>
                        </Col>
                        <Col >
                            <b>Status</b>
                        </Col>
                        <Col >
                            <b>Additional Constraints</b>
                        </Col>
                        <Col >
                            <b>Actions</b>
                        </Col>
                    </Row>
 {this.state.rolesSelectionData.map((appRole,index) => 
 (
                    <Row className="reviewTableData" key={index}> 
                      <Col>
                            {appRole.applicationName}
                        </Col>
                        <Col >
                            {appRole.rolesName}
                        </Col>
                        <Col >
                            {appRole.status}
                        </Col>

                        <Col >
                          <a  href="#" onClick={this._showModal} className="reviewAddConstraintsNav">{this.getDetails(appRole.applicationName)}</a>
                        </Col>
                        <Col  >
                           <button key={index} onClick={()=>this._deleteSelectedRoles(index)}><i className="ms-Icon ms-Icon--Delete" aria-hidden="true"></i></button>
                        </Col>                  
                    </Row>
                    ))}
</div> 
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                        <ButtonToolbar className="reviewButtons">
                         <Button className="uum-button-secondary-md" onClick={(e) => this.goToPath(e,'/assignRoles')}>Back</Button>
                        <Button className="uum-button-primary-md"onClick={(e) => this.goToPath(e,'/confirmation')}>Next</Button>
                         </ButtonToolbar>
                         </Col>
                    </Row>
                <Modal
          isOpen={this.state.showModal}
          onDismiss={this._closeModal}
          containerClassName="ms-modalExample-container"
          isBlocking={true}
          className="review-selection-main-modal"
        >
        <div className="reviewSelection-modal">
            <div className="modal-header">
            <h4>Additional Constraints</h4>
              <button><i className="ms-Icon ms-Icon--Cancel" aria-hidden="true" onClick={()=>this._closeModal()}></i></button>
            </div>
            {this.props.agreementNoListInfo.map((agtData,index)=>
            (
             <div key={index}>   
            <div className="modal-text">
              <span>{agtData.applicationName}</span>
            </div>
            <div className="agreement-details">
            <div className="agreement-number">
            <label>AgreementNumber</label>
            </div>
           {agtData.agreementsAdded.agreementNosData.map((agtno,index)=>
            (
             <div key={index}className="agreement-data"> 
            <span>
             {agtno}
              </span>  
            </div>
            ))}
        </div>
        </div>
        ))}
        </div>
        </Modal>            
            </div>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (store)=>{
    return {

      rolesSelectionData:store.rootReducer.rolesSelectionData,
      agreementNoListInfo: store.rootReducer.agreementNoListInfo
    };
}
    const mapDispatchToProps = (dispatch)=>{
        return {
            updateSelectionChange: (isRolesSelected)=>{
                dispatch(rolesSelection(isRolesSelected))
            }
        }

}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewSelection);