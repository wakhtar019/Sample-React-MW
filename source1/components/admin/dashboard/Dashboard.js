import React from 'react';
import {UUMLogger} from '../../../appInsights';

 class Dashboard extends React.Component{

constructor(props){
    super(props)
    UUMLogger.trackPageView('UUM.Dashboard');
    let properties= UUMLogger.createPropertyBag();
    properties.addToBag('UserName','Nagaraju');
    properties.addToBag('Alias','v-naggad');
    UUMLogger.logEvent('UUM.Dashboard','UUM dashbaord Component loaded', properties);
}
  goToPath =(path)=>{
    this.props.history.push(path);
  }
    render(){
    return (
      <div>
      <div className="breadcrumb-nav"></div>
      <div className="section-header"><h6>Dashboard</h6></div>
      <div className="content-area"> 
          <div className="tile-container">

              <div className="tile">
                  <h5>Invite New User</h5>
                  <div className="tile-content"> 
                      <span>
                          <h3>Invite new users to the VL systems</h3>

                      </span>
                     
                      <button className="btn uum-button-primary-md" onClick={()=> this.goToPath('/inviteUser')}>Invite User</button>
                    
                  </div>
              </div>
              <div className="tile">
                  <h5>Edit/Revoke Permissions</h5>
                  <div className="tile-content">
                      <span>
                          <h3>Edit or Revoke the user permissions</h3>
                      </span>
                   
                      <button className="btn uum-button-primary-md" onClick={()=> this.goToPath('/editPermissions')}>Edit/Revoke Permissions</button>
                      
                  </div>
              </div>
              <div className="tile">
                  <h5>Request Access</h5>
                  <div className="tile-content">
                      <span>
                          <h3>Request Access to the VL systems</h3>
                      </span>
                   
                      <button className="btn uum-button-primary-md" onClick={()=> this.goToPath('/editPermissions')}>Request Access</button>
                      
                  </div>
              </div>

              <div className="tile">
                  <h5>Active Roles</h5>
                  <div className="tile-content">
                      <span>
                          <h3>Review the summary of permissions you have in VL tools</h3>
                      </span>
                   
                      <button className="btn uum-button-primary-md" onClick={()=> this.goToPath('/editPermissions')}>Review Permissions</button>
                      
                  </div>
              </div>
              {/* <div className="barProgress">
<h5>View Approved/Pending/Rejected Request</h5>
<div className="tile-content">

 <progress value ="60" max="100"></progress> 
<button className="btn btn-primary">Go to my actions</button>
</div>
</div>  */}
          </div>


      </div>
      </div>
    )
  }
  }
export default Dashboard;
