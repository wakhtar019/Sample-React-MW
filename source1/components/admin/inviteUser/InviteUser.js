import React from 'react';
import { Col, Button, Form, FormGroup, FormFeedback,Label, Input, FormText } from 'reactstrap';


class InviteUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showCRN:false,
            disableNextBtn:true,
            email:'',
            crn:undefined,
            validate:{
                crnInValid:false,
                emailInValid:false
            }
        }
    }
    componentDidMount(){
        this.emailInput.focus(); 
     }
     goToPath(e,path) {
        e.preventDefault();
        this.props.history.push(path);
      }

      validateEmailThroughAPI(){
          return true;
      }
      validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailInValid = false
          } else {
            validate.emailInValid = true
          }
          this.setState({ validate })
    }


      isInternalUser(){
          if(this.state.email.indexOf('@microsoft.com')>-1){
            return true;
          }
        return false;
      }


      validteCRN(e){
        const { validate } = this.state
        if(e.target.value.length>0){
            validate.crnInValid= false;
        }
        else{
                validate.crnInValid= true;
        }
        this.setState(validate);       
      }

     onChangeEmail(event){       
         if(event.target.value && !this.state.showCRN){
            this.setState({disableNextBtn:false,email:event.target.value})         
         }else if(event.target.value && this.state.showCRN && this.state.crn){
            this.setState({disableNextBtn:false,email:event.target.value}) 
         }else{
            this.setState({disableNextBtn:true,email:event.target.value}) 
         }
     }

     onCRNChange(event){
        if(event.target.value && this.state.email){
            this.setState({disableNextBtn:false,crn:event.target.value}) 
        }else{
            this.setState({disableNextBtn:true,crn:event.target.value}) 
         }
     }


      onClikNext(e,ref){
        e.preventDefault();
        this.setState({disableNextBtn:true})
         if(this.validateEmailThroughAPI() ){

             if(this.isInternalUser()){
                this.goToPath(e,'/assignroles');
             }else{
                 if(!this.state.showCRN){
                    this.setState({ showCRN:true});
                 }else{
                    this.goToPath(e,'/organizationDetails');
                 }            
              
             }
           
         }
        
      }


      

    render(){
        return(
            <div>
                 <div className="breadcrumb-nav"></div>
            <div className="section-header"><h6>User Details</h6></div>
            <div className="content-area"> 
                <div className="form-container invite-user-container">
                 <Form onSubmit={(e)=>this.onClikNext(e)}>
       <FormGroup>
          <Label htmlFor="txtEmail">Email Id</Label>
          <Input type="email"  
             onChange={(e)=>{
                this.onChangeEmail(e),
                this.validateEmail(e)          }
             } 
          innerRef={(input) => { this.emailInput = input; }}  
          name="emailInfo"  id="txtEmail" aria-label="Enter email id" 
          placeholder="Enter email"
          invalid={ this.state.validate.emailInValid}
          onBlur={this.validateEmail.bind(this)}
          />
          <FormFeedback >Ivalid Email Format</FormFeedback>
        </FormGroup>
        {this.state.showCRN && <FormGroup>
          <Label for="exampleEmail">CRN Number</Label>
          <Input type="text" innerRef={(input) => { this.CRNInput = input; }}
           onChange={(e)=>{this.onCRNChange(e) , this.validteCRN(e)}}
            name="crn"  id="txtOrganizationPcn" placeholder="Enter Organization PCN" 
            onBlur={this.validteCRN.bind(this)}
           invalid={ this.state.validate.crnInValid } />
          <FormFeedback >Invalid CRN number</FormFeedback>
        </FormGroup>}
            <div className="bottom-buttons"> 
                <button className="btn uum-button-secondary-sm"  onClick={(e) => this.goToPath(e,'/dashboard')}>Cancel</button>
                <button className="btn uum-button-primary-sm" type="submit" disabled={this.state.disableNextBtn}>Next</button>
            </div>
        </Form>
        </div>
        </div>       
        </div>
        )
    }
}

export default InviteUser;