import React, { Component } from 'react';
import Header from './components/common/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from 'react-redux';
import  LeftNav from './components/common/LeftNav';
import {Dashboard} from './components/admin/dashboard'
import {InviteUser} from './components/admin/inviteUser';
import {EditPermissions} from './components/admin/editPermissions';
import {loginHelper} from './services/loginHelperService';
import {Login} from './components/login';
import {OrganizationDetails} from './components/admin/organizationDetails';
import { initializeIcons } from '@uifabric/icons';
import {ReviewSelection} from './components/admin/reviewSelection';
import {ActiveRoleSummary} from './components/admin/activeRoles';
import {Confirmation} from './components/admin/confirmation';
import UUMSpinner from './components/common/UUMSpinner';
import {UUMAI} from './appInsights';
import {AssignRoles} from './components/admin/assignRoles';

export class App extends Component {
  constructor(props){
    super(props);
    initializeIcons(undefined,{disableWarnings:true}); 
    this.isAuthenticated = loginHelper.isAuthenticated();
  }
  componentDidMount() {
    loginHelper.handleWindowCallback();  
  }
 
  
  render() {
    const isLoggedIn = this.isAuthenticated;
    return (
      

      <Router onUpdate={UUMAI.trackRouterChange}>
      <div className="App" >
       
        <Header ></Header>
        { isLoggedIn ?  
        <div className="container">
        <LeftNav />

        <div id="right-container" className={this.props.isLeftNavExpanded?"right-pan-minimize":"right-pan"}>
          
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/dashboard" component={Dashboard} />
         <Route exact path="/inviteUser" component={InviteUser}/>
         <Route exact path="/editPermissions" component={EditPermissions}/>
         <Route exact path="/assignRoles" component={AssignRoles}/>
         <Route exact path="/OrganizationDetails" component={OrganizationDetails}/>
         <Route exact path="/reviewSelection" component={ReviewSelection}/>
         <Route exact path="/logIn" component={Login}/>
         <Route exact path="/activeRoleSummary" component={ActiveRoleSummary}/>
         <Route exact path="/confirmation" component={Confirmation}/>
       </div>       
       </div>: 
        <Login></Login>
        }
      </div>
      </Router>
       
    );
  }
}

const mapStateToProps = (store)=>{
  return {
    isLeftNavExpanded: store.rootReducer.isLeftNavExpanded,
    showLoader: store.rootReducer.showLoader
  };
}
export default connect(mapStateToProps)(App);
