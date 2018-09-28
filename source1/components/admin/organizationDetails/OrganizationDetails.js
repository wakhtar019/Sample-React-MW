import React from 'react';
import { values } from '@uifabric/utilities';
import UserCreation from './UserCreation';

class OrganizationDetails extends React.Component{

    render(){
        return(
            <div className="organization-details">                  
            <div className="breadcrumb-nav"></div>                  
            <div className="section-header"><h4> User Details > Organization Details</h4></div>
            <div className="content-area">
            <div className="form-container float-left ">  
            <div className="user-details">
              
              <div className="col-md-12 ">
               <h4>Organization Details</h4> 
              </div>
            <div className="row org-details ">

            <div className="col-md-4 details ">
              
                <div className="col-md-12  ">
                <div className="col-md-12 ">
                    <h5>Organization Details</h5>
                    </div>
 
                    <div className="row">
                        <div className="col ">
                            <label>Org PCN Number </label>
                        </div>
                        <div className="col">
                            <span>1234564</span>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col ">
                            <label>Name </label>
                        </div>
                        <div className="col">
                            <span>Contoso</span>
                        </div>
                    </div>
                   
                    <div className=" row">
                        <div className="col ">
                            <label>City </label>
                        </div>
                        <div className="col">
                            <span>New York</span>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col ">
                            <label>State/Province </label>
                        </div>
                        <div className="col">
                            <span>New York</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <label> Country</label>
                        </div>
                        <div className="col">
                            <span>United States</span>
                        </div>
                    </div>
      
                </div>
                
            </div>

            <div className="col-md-8 user-creation ">
                <h5>User Details</h5>
                <span className="mandatary-text"> All fields are mandatary to create account</span>
                <UserCreation/>
            </div>
            </div>     
        </div>
        </div>
        </div>
        </div>
        )
    }
}

export default OrganizationDetails;