import React from 'react';
import {Row, Col, Label, Button } from 'reactstrap';
import { connect } from 'react-redux';
class Confirmation extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            ConfirmationEmail_userName : 'Kevin',
            ConfirmationEmail_userEmail : 'wandahoward@microsoft.com',
            ConfirmationEmail_application : 'MSQuote',
        };
    }
    goToPath(e,path) {
        e.preventDefault();
        this.props.history.push(path);
      }
    render(){
        console.log(this.props);
        const element = {
            ConfirmationEmail_Salutation : 'Dear',
            ConfirmationEmail_UserInfo1 : 'The user',
            ConfirmationEmail_UserInfo2 : 'is now provised to following applications.',
            ConfirmationEmail_Btn : 'Submit',
            ConfirmationEmail_NotifyMsg1 : 'User will receieve notification with the steps to access the application. Please ensure that user will add',
            ConfirmationEmail_NotifyMsg2 : 'vluum@microsoft.com',
            ConfirmationEmail_NotifyMsg3 :'in their contacts to avoid losing messages from Microsoft in spam folder.'
        }
        
        return(
            <div className="confirmation"> 
                <div className="section-header"><h6>User Details > Assign Roles > Review Selection > Confirmation</h6></div>              
                <div className="content-area"> 
                    <div className="form-container">
                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <h5>Confirmation</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <Label className="confirmName"> {element.ConfirmationEmail_Salutation} {this.state.ConfirmationEmail_userName}, </Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <Label className="confirmText">{element.ConfirmationEmail_UserInfo1} {this.state.ConfirmationEmail_userEmail} {element.ConfirmationEmail_UserInfo2}</Label>
                            </Col>
                        </Row>
                    {this.props.rolesSelectionData.map((appRole,index) => 
                      (     
                        <Row key={index}>
                            <Col xs={12} sm={12} md={12}>
                                <Label className="confirmApplication"><b>{appRole.applicationName}</b></Label>
                            </Col>
                        </Row>
    ))}
                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <Label className="confirmNotify">{element.ConfirmationEmail_NotifyMsg1} <span className="confirmSpan">{element.ConfirmationEmail_NotifyMsg2}</span> {element.ConfirmationEmail_NotifyMsg3}</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <Button className="uum-button-primary-md confirmSubmitBtn" onClick={(e) => this.goToPath(e,'/dashboard')}>Submit</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store)=>{
    return {
      rolesSelectionData: store.rootReducer.rolesSelectionData
    };
}

export default connect(mapStateToProps)(Confirmation);