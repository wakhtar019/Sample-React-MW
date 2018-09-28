import React from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import {Panel} from 'react-bootstrap';
class ActiveRoleSummary extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    application:'Partner Quote',
                    role:'Administrator',
                    status:'Active'
                },
                {
                     application:'eMSL',
                     role:'Creator',
                    status:'Active'
                 }
                 
            ]
        };
       
      }

     getList(){
        return (this.state.data.map((n)=>{
    return( 
     <Row className="rowStyle">
        <Col xs={3} sm={3} md={3}>
            <Label>{n.application}</Label> 
        </Col>
        <Col xs={3} sm={3} md={3}>
             <Label>{n.role}</Label> 
        </Col>
        <Col xs={3} sm={3} md={3}>
             <Label>{n.status}</Label> 
        </Col>
         <br/>
     </Row>  
       );
       })); 
        }    
    render(){
        return(         
            <Container className="summaryContainer">
                 <Row>
                    <Col xs={12} sm={12} md={12}>
                         <Panel>
                             <Panel.Heading >
                                <Row>
                                     <Col xs={12} sm={12} md={12} >
                                        <Label className="titleStyle">Active Role Summary</Label>
                                    </Col>
                                 </Row>
                            </Panel.Heading>
                            <Panel.Body className="summaryPanel">
                                 <Row>
                                    <Col xs={9} sm={9} md={9} className="summaryTitle">
                                        <p>Below Roles are currently Assigned to the user in different Volume Licensing applications</p>
                                    </Col>
                                 </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3}>
                                        <b>Application</b>
                                   </Col>
                                    <Col xs={3} sm={3} md={3}>
                                        <b>Role</b>
                                    </Col>
                                    <Col xs={3} sm={3} md={3}>
                                        <b>Status</b>
                                     </Col>
                                </Row>                             
                                    {this.getList()}                           
                            </Panel.Body>
                        </Panel>
                    </Col>
                 </Row>
             </Container>
        );
    }
}

export default ActiveRoleSummary;