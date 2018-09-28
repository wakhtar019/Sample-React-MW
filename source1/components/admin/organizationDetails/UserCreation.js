import React from 'react';
import { Col, Button, Form, FormGroup, FormFeedback,Label, Input, FormText } from 'reactstrap';
import { withRouter } from "react-router-dom";

class UserCreation extends React.Component {

    constructor(props){
        super(props);
        const NO_ERROR="no-error";
        const HAS_ERROR = "has-error";

        this.state={isEdit:false,
            validate:{
                firstNameState:'',
                lastNameState:'',
                addressLine1State:'',
                addressLine2State:'',
                countryState:'',
                statesState:'',
                cityState:'',
                phoneNumberState:'',
                postalCodeState:'',
                languageState:'',
                emailState:'',
                statusState:''

            }
        
        };
        this.onCreateAccount = this.onCreateAccount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
     }
    onCreateAccount=(e)=>{
        e.preventDefault();
        //this.setState({isEdit:!this.state.isEdit});
        this.props.history.push("/assignroles");
    }
    
    validateFirstName=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>1){
            validate.firstNameState= 'no-error';
        }
        else{
                validate.firstNameState= 'has-error';
        }
        this.setState(validate);       
     }
     validateLastName=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.lastNameState= 'no-error';
        }
        else{
                validate.lastNameState= 'has-error';
        }
        this.setState(validate);       
     }

     validateAddressLine1=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.addressLine1State= 'no-error';
        }
        else{
                validate.addressLine1State= 'has-error';
        }
        this.setState(validate);       
     }
     validateAddressLine2=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.addressLine2State= 'no-error';
        }
        else{
                validate.addressLine2State= 'has-error';
        }
        this.setState(validate);       
     }
   
    validateCountry=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.countryState= 'no-error';
        }
        else{            
            validate.countryState= 'has-error';
        }
        this.setState(validate);       
     }
   

    validateStates=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.statesState= 'no-error';
        }
        else{            
            validate.statesState= 'has-error';
        }
        this.setState(validate);       
     }
   
    validateCity=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.cityState= 'no-error';
        }
        else{            
            validate.cityState= 'has-error';
        }
        this.setState(validate);       
     }
   
    validatePostalCode=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.postalCodeState= 'no-error';
        }
        else{            
            validate.postalCodeState= 'has-error';
        }
        this.setState(validate);       
    }

   
    validatePhoneNumber=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.phoneNumberState= 'no-error';
        }
        else{            
            validate.phoneNumberState= 'has-error';
        }
        this.setState(validate);       
    }

    
    validateLanguage=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.languageState= 'no-error';
        }
        else{            
            validate.languageState= 'has-error';
        }
        this.setState(validate);       
    }
    
    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'no-error'
          } else {
            validate.emailState = 'has-error'
          }
          this.setState({ validate })
    }
    
    validateStatus=(e) =>{
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.statusState= 'no-error';
        }
        else{            
            validate.statusState= 'has-error';
        }
        this.setState(validate);       
    }
   
     handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
      }

      checkAllFields = ()=>{
        let disable=true;
        if(this.state.firstName && this.state.lastName && this.state.addressLine1 && this.state.addressLine2 && this.state.country &&  this.state.state
            &&  this.state.city &&  this.state.phoneNumber &&  this.state.postalCode &&  this.state.language &&  this.state.email &&  this.state.status
        ){
            disable =  false;
        }
        return disable;
      }
    
  render() {
    return (
        
      <Form onSubmit={this.onCreateAccount} >
          <div className="col-sm-12 float-left">
          <div className="col-sm-6 col-md-6 float-left">
            <FormGroup row>
            <Label for="userFirstName"  >First Name</Label>                 

             {!this.state.isEdit?<div><Input className={this.isEdit?'in-edit-mode':'read-mode'}  type="text" name="firstName" id="userFirstName" placeholder="" 
            value={this.state.firstName} 
            onBlur={(e)=>{this.validateFirstName(e)}}
             
           
            onChange={(e)=>{
                this.handleChange(e)
                this.validateFirstName(e)
            }} 
            invalid={ this.state.validate.firstNameState === 'has-error'}
            />  
            <FormFeedback >First Name should be more than 2 letters</FormFeedback>
            </div>
            :<span>{this.state.firstName}</span>} 

             </FormGroup>     
                  
      </div>
      <div className="col-sm-6 col-md-6 float-left">
      <FormGroup row>
            <Label for="userlastName">Last Name</Label>
          
            {!this.state.isEdit?<div><Input className={this.isEdit?'in-edit-mode':'read-mode'}  type="text" name="lastName" id="userlastName" placeholder="" 
            value={this.state.lastName} 
            onBlur={(e)=>{this.validateLastName(e)}}
            onChange={(e)=>{
                this.handleChange(e)
                this.validateLastName(e)
            }
            
            } 
            invalid={ this.state.validate.lastNameState === 'has-error' }
            />
            <FormFeedback >Last Name should not be empty</FormFeedback></div>
            :<span>{this.state.lastName}</span>}                
      </FormGroup>
      </div>
      </div>
      <div className="col-sm-12 float-left">
          <div className="col-sm-6 col-md-6 float-left">
                <FormGroup row>
                <Label for="useraddressLine1"  >Address Line 1</Label>               
                 {!this.state.isEdit?<div><Input className={this.isEdit?'in-edit-mode':'read-mode'}  type="text" name="addressLine1" id="addressLine1" placeholder="" 
                value={this.state.addressLine1} 
                onBlur={(e)=>{this.validateAddressLine1(e)}}
                onChange={(e)=>{
                    this.handleChange(e)
                    this.validateAddressLine1(e)
                } } 
                invalid={ this.state.validate.addressLine1State === 'has-error' }
            />
            <FormFeedback >Address Line1 should not be empty</FormFeedback></div>
            :<span>{this.state.lastName}</span>}          
                    </FormGroup>     
            </div>
        <div className="col-sm-6 col-md-6 float-left">
                <FormGroup row>
                    <Label for="useraddressLine2"   >Address Line 2</Label>         
                    {!this.state.isEdit?<div><Input type="text" name="addressLine2" id="useraddressLine2" placeholder="" 
                    value={this.state.addressLine2} 
                    onBlur={(e)=>{this.validateAddressLine2(e)}}
                    invalid={ this.state.validate.addressLine2State === 'has-error' }
                    onChange={(e)=>{
                        this.handleChange(e)
                        this.validateAddressLine2(e)
                    }
                }/>
                 <FormFeedback >Address Line 2 should not be empty</FormFeedback></div>
               
                :<span>{this.state.addressLine2}</span>} 
                
                </FormGroup>
        </div>
      </div>
      <div className="col-sm-12 float-left">
          <div className="col-sm-6 col-md-6 float-left">
            <FormGroup row>
            <Label for="usercountryRegion"  >Country/Region</Label>
           
            {!this.state.isEdit?<div><Input type="text" name="country" id="usercountryRegion" placeholder="" 
            value={this.state.country} 
            invalid={ this.state.validate.countryState === 'has-error' }
            onBlur={(e)=>{this.validateCountry(e)}}
            onChange={(e)=>{
                    this.handleChange(e)
                    this.validateCountry(e)
                }

            } />
            <FormFeedback >Country should not be empty</FormFeedback></div>        
            :<span>{this.state.country}</span>} 
            </FormGroup>        
                  
      </div>
      <div className="col-sm-6 col-md-6 float-left">
      <FormGroup row>
            <Label for="userState"   >State</Label>
           
            {!this.state.isEdit?<div><Input type="text" name="state" id="userState" placeholder="" 
            value={this.state.state} 
            invalid={ this.state.validate.statesState === 'has-error' }
            onBlur={(e)=>{this.validateStates(e)}}
            onChange={(e)=>{
                this.handleChange(e)
                this.validateStates(e)
            }           
           } />
            
            <FormFeedback >State should not be empty</FormFeedback></div>
            :<span>{this.state.state}</span>} 
            </FormGroup>
      </div>
      </div>
      <div className="col-sm-12 float-left">
          <div className="col-sm-6 col-md-6 float-left">
            <FormGroup row>
            <Label for="userCity"  >City</Label>
           
            {!this.state.isEdit?<div><Input type="text" name="city" id="userCity" placeholder="" 
            value={this.state.city} 
            invalid={ this.state.validate.cityState === 'has-error' }
            onBlur={(e)=>{this.validateCity(e)}}
            onChange={(e)=>{
                this.handleChange(e)
                this.validateCity(e)
            }  
            
            } />
            <FormFeedback >City should not be empty</FormFeedback></div>
                :<span>{this.state.city}</span>} 
            </FormGroup>        
                  
      </div>
      <div className="col-sm-6 col-md-6 float-left">
      <FormGroup row>
            <Label for="userPostalCode"   >Postal Code</Label>
           
            {!this.state.isEdit? <div><Input type="number" name="postalCode" id="userPostalCode"
             placeholder="" 
             value={this.state.postalCode} 
             invalid={ this.state.validate.postalCodeState === 'has-error' }
             onBlur={(e)=>{this.validatePostalCode(e)}}             
                onChange={(e)=>{
                    this.handleChange(e)
                    this.validatePostalCode(e)
                }                
            }/>
            <FormFeedback >Postal Code should not be empty</FormFeedback></div>
             :<span>{this.state.postalCode}</span>} 
        </FormGroup>
      </div>
      </div>
      <div className="col-sm-12 float-left">
          <div className="col-sm-6 col-md-6 float-left">
            <FormGroup row>
            <Label for="userPhone"  >Phone Number</Label>
           
            {!this.state.isEdit?<div><Input type="text" name="phoneNumber" id="userPhone" placeholder="" 
            value={this.state.phoneNumber}
            invalid={ this.state.validate.phoneNumberState === 'has-error' } 
            onBlur={(e)=>{this.validatePhoneNumber(e)}}                   
            onChange={(e)=>{
                this.handleChange(e)
                this.validatePhoneNumber(e)
            }  

            } />
            <FormFeedback >Phone Number should not be empty</FormFeedback></div>
            :<span>{this.state.phoneNumber}</span>} 
            </FormGroup>        
                  
      </div>
      <div className="col-sm-6 col-md-6 float-left">
      <FormGroup row>
            <Label for="userLanguage">Language</Label>           
            {!this.state.isEdit?<div><Input type="text" name="language" id="userLanguage" placeholder="" 
                value={this.state.language}
                invalid={ this.state.validate.languageState === 'has-error' }
                onBlur={(e)=>{this.validateLanguage(e)}}                    
                onChange={(e)=>{
                    this.handleChange(e)
                    this.validateLanguage(e)
                }              
            } />         
            <FormFeedback >Language should not be empty</FormFeedback></div>
                :<span>{this.state.language}</span>} 
            </FormGroup>
      </div>
      </div>
      <div className="col-sm-12 float-left">
          <div className="col-sm-6 col-md-6 float-left">
            <FormGroup row>
            <Label for="userEmail" >Email Address</Label>
           
            {!this.state.isEdit?<div><Input type="email" name="email" id="userEmail" placeholder="" 
            value={this.state.email} 
            invalid={ this.state.validate.emailState === 'has-error' }  
            onBlur={(e)=>{this.validateEmail(e)}}     
            onChange={(e)=>{
                this.handleChange(e)
                this.validateEmail(e)
            }   
            
            } />
            <FormFeedback >Email should not be empty</FormFeedback></div>
            :<span>{this.state.email}</span>} 
            </FormGroup>        
                  
      </div>
      <div className="col-sm-6 col-md-6 float-left">
      <FormGroup row>
            <Label for="userStatus"  > Status</Label>
           
            {!this.state.isEdit? <div><Input type="text" name="status" id="userStatus" placeholder="" 
            value={this.state.status} 
            invalid={ this.state.validate.statusState === 'has-error' }
            onBlur={(e)=>{this.validateStatus(e)}}       
            onChange={(e)=>{
                this.handleChange(e)
                this.validateStatus(e)
             }
            }
            />
            <FormFeedback >Email should not be empty</FormFeedback></div>
             :<span>{this.state.status}</span>} 
            </FormGroup>
      </div>
      </div>
      <div className="organization-buttons">
      <button  className="btn uum-button-secondary-sm" >Cancel</button>
      <button type="submit" className="btn uum-button-primary-sm" disabled={this.checkAllFields()} > {this.state.isEdit ? "Edit Account": "Next"}</button>
      </div>
      </Form>
    
    );
  }
}

export default withRouter(UserCreation);