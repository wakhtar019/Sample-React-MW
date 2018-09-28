import React from 'react';
import {Row, Col, Label,Button } from 'reactstrap';
import front from '../../assets/Images/front.jpg';
import mslogo from '../../assets/Images/mslogo.jpg';
import { loginHelper } from '../../services/loginHelperService';


export class Login extends React.Component{
    
    constructor(props) {
        super(props);
        this.loginWithAAD = this.login.bind(this);

    }


    login = (e, type) => {
        e.preventDefault();
        loginHelper.login(type);
        this.getUserThumbnail();
    }
    
    render(){
        return(       
             <div className="SignInpanel" >               
                <Row>
                    <Col xs={12} sm={12} md={12}>
                       <img className="SignInfrontImg" src={front}></img>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={12} md={12} className="SignInwelcomeLabel">
                        <Label ><center>Welcome, let's get started!</center></Label>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} sm={6} md={6}>
                         <Button className="signInbtn" onClick={(e) => this.login(e, 'msa')} >Sign In to Microsoft Account  </Button>
                    </Col>

                    <Col xs={6} sm={6} md={6}>
                        <Button className="signInbtn" onClick={(e) => this.login(e, 'aad')} >Sign In a work or school Account </Button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4} sm={4} md={4}>
                         <p className="signInBtnText">A personal Microsoft Account (formerly known as Windows Live ID) created by you (Eg.tomas@hotmail.com)</p>
                    </Col>
                    <Col xs={7} sm={7} md={7} >
                        <p className="signInBtnText1">A Work or school Account (Eg. tomasa@Contoso.onmicrosoft.com) created by your IT department. We do not support creation of a new work account at momemt. Alternately, use your Microsoft Account</p>
                    </Col>
               </Row>   
                <Row>
                    <Col xs={6} sm={6} md={6}>
                         <img className="logoImg center" src={mslogo}></img>
                    </Col>   
                </Row>             
            </div>          
        );
    }
}

export default Login;