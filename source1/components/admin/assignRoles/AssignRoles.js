import React from 'react';
import {Accordion} from '../../utilities/accordian';
import {AccordionItem} from '../../utilities/accordian';
import {rolesSelection} from '../../../actions/action'
import Roles from './Roles';
import AddConstraints from './AddConstraintsModal';
import { connect } from "react-redux";

 class AssignRoles extends React.Component
 {
     constructor(props){
         super(props);
         this.state=
         {
          rolesSelectionData:[],
        applicationRoles:[
            {
applicationName:"Partner Quote",
applicationId:"partnerQuote-roles",
additionalConstraintsDisplayed:false,
rolesData:[ 
             {
            options:[ { key: 'A', text: 'Option a',value:'11' },
            { key: 'B', text: 'Option b',value:'22' },
            { key: 'C', text: 'Option c',value:'33' }
          ],
          labelName:"Administrator"
             },
             {
                options:[ { key: 'A', text: 'Option a',value:'11' },
                { key: 'B', text: 'Option b',value:'22' },
                { key: 'C', text: 'Option c',value:'33' }
              ],
              labelName:"Submitter"
             },
             {
                options:[ { key: 'A', text: 'Option a',value:'11' },
                { key: 'B', text: 'Option b',value:'22' },
                { key: 'C', text: 'Option c',value:'33' }
              ],
              labelName:"Creator"
             },
             {
                options:[ { key: 'A', text: 'Option a',value:'11' },
                { key: 'B', text: 'Option b',value:'22' },
                { key: 'C', text: 'Option c',value:'33' }
              ],
              labelName:"Viewer"
             },
             {
                options:[ { key: 'A', text: 'Option a',value:'11' },
                { key: 'B', text: 'Option b',value:'22' },
                { key: 'C', text: 'Option c',value:'33' }
              ],
              labelName:"Signer"
             }
    ]},
       {
    applicationName:"eMSL",
    applicationId:"eMsl-roles",
    additionalConstraintsDisplayed:false,
    rolesData:[ 
                 {
                options:[ { key: 'A', text: 'Option a' },
                { key: 'B', text: 'Option b' },
                { key: 'C', text: 'Option c' }
              ],
              labelName:"Administrator"
                 },
                 {
                    options:[ { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' }
                  ],
                  labelName:"Submitter"
                 },
                 {
                    options:[ { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' }
                  ],
                  labelName:"Creator"
                 },
                 {
                    options:[ { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' }
                  ],
                  labelName:"Viewer"
                 },
                 {
                    options:[ { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' }
                  ],
                  labelName:"Signer"
                 }
        ]} ,
       {
        applicationName:"VLCM",
        applicationId:"vlcm-roles",
        additionalConstraintsDisplayed:true,
        rolesData:[ 
                     {
                    options:[ { key: 'A', text: 'Option a' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c' }
                  ],
                  labelName:"Administrator"
                     },
                     {
                        options:[ { key: 'A', text: 'Option a' },
                        { key: 'B', text: 'Option b' },
                        { key: 'C', text: 'Option c' }
                      ],
                      labelName:"Submitter"
                     },
                     {
                        options:[ { key: 'A', text: 'Option a' },
                        { key: 'B', text: 'Option b' },
                        { key: 'C', text: 'Option c' }
                      ],
                      labelName:"Creator"
                     },
                     {
                        options:[ { key: 'A', text: 'Option a' },
                        { key: 'B', text: 'Option b' },
                        { key: 'C', text: 'Option c' }
                      ],
                      labelName:"Viewer"
                     },
                     {
                        options:[ { key: 'A', text: 'Option a' },
                        { key: 'B', text: 'Option b' },
                        { key: 'C', text: 'Option c' }
                      ],
                      labelName:"Signer"
                     }
    ]}]
}  
     }
        goToDashboard(e,path) {
            e.preventDefault();
            this.props.history.push(path);
        }
        OnFocusItem = (id) => {
            console.log('onFocus called',id);
          }
        OnBlurItem = (id) => {
            console.log('onBlur called',id);
          }
          createSelectedRolesObj=(event,roleName,dropdownId,toggleId,applicationName,status)=>
          {
            let rolesObj={'applicationName':applicationName,'rolesName':roleName,'status':status,'dropdownId':dropdownId,'toggleId':toggleId,'optionSelected':event};
            let roleList =this.state.rolesSelectionData;           
            roleList.push(rolesObj);
             this.setState({
               rolesSelectionData:roleList
             }
             )
             this.props.updateSelectionChange(this.state.rolesSelectionData);
          }
          onselectionChange= (event,roleName,dropdownId,toggleId,applicationName,toggleState)=>{
            let status=toggleState?"Review Addition":"Request Removal";
            console.log('changed',roleName,dropdownId,toggleId);
            console.log(event);
            if(this.state.rolesSelectionData.length==0){
             this. createSelectedRolesObj(event,roleName,dropdownId,toggleId,applicationName,status);           
            }else{
              let selectedRolesData=this.state.rolesSelectionData;
              let isMatched = false;
              selectedRolesData.map((eachItem=>
              {
                if(eachItem.dropdownId == dropdownId){
                  eachItem.optionSelected = event;
                  isMatched = true;          
                }                              
              }))
              if(isMatched){
                this.state.rolesSelectionData=selectedRolesData;
              }else{
               this. createSelectedRolesObj(event,roleName,dropdownId,toggleId,applicationName,status);
              }
            }
          }
          goToPath(e,path) {
            e.preventDefault();
            this.props.history.push(path);
          }

         render() {
         return(            
             <div className="assign-roles">                         
        <div className="breadcrumb-nav"></div>                  
        <div className="section-header"><h4>   User Details>Assign Roles</h4></div>
        <div className="content-area">
        <div className="form-container details-accordian-container float-left">  
<div className="content" >
<h5>Assign Roles</h5>
<p>
Please expand the application you want to grant access to the user.To enable a role assignment text-box,please toggle on the respective well known role.For applications where only one role can be assigned,toggle for only one  role will be on at a time.  
</p>
<span className="note">Note:</span>
<span>The roles that are assigned to you are default enabled.</span>
</div>
<div className="row ">
<div className="col-md-10">
<Accordion>
{this.state.applicationRoles.map((appRole,index) => 
(   
<AccordionItem key={index} name={appRole.applicationName} caption={appRole.applicationName}>
<div className="application-roles" id={appRole.applicationId}>
<h6>1.Select Roles</h6>
 {appRole.rolesData.map((role,index) => 
(
<Roles key={index} labelName={role.labelName} toggleId={appRole.applicationId + "-toggle-"+index} optionsData={role.options} dropdownId={appRole.applicationId+"-dropdown-"+index} applicationClassId={appRole.applicationId+"-row-"+index} onFocusMethod={this.OnFocusItem} OnBlurMethod={this.OnBlurItem}  onselectionChange={this.onselectionChange} applicationName={appRole.applicationName} additionalConstraintsDisplayed={appRole.additionalConstraintsDisplayed} > </Roles>))}
{appRole.additionalConstraintsDisplayed && <AddConstraints appName={appRole.applicationName} rolesSelected={this.state.rolesSelectionData} />}
</div>
</AccordionItem>))}
</Accordion>
</div>
<div className="col-md-2">
</div>
</div>
 <div className="assignRoles-buttons">                                   
       <button className="btn uum-button-secondary-sm"  onClick={(e) => this.goToPath(e,'/inviteuser')}>Cancel</button>                                  
        <button className="btn uum-button-primary-sm" disabled={!(this.state.rolesSelectionData.length)>0} onClick={(e) => this.goToPath(e,'/reviewSelection')}>Next</button>
  </div>
 </div>
 </div>
 </div>
         )
     }
 }
const mapDispatchToProps = (dispatch) => {
  return{
    updateSelectionChange: (isRolesSelected)=>{
        dispatch(rolesSelection(isRolesSelected))
    }
  } 
}
 export default connect(null,mapDispatchToProps)(AssignRoles);