import React from 'react';
import { connect } from "react-redux";
import {rolesSelection} from '../../../actions/action'
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Dropdown} from 'office-ui-fabric-react/lib-commonjs/Dropdown';
class Roles extends React.Component
 {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: [],
      toggleState:false
    };
  }
  toggleChange = (event,toggleId,dropdownId,labelName) => {
    this.setState(() => ({
        toggleState: !this.state.toggleState
      }))
    console.log(this.state.toggleState);
    console.log(event,toggleId,dropdownId,labelName);
  }
  goToDashboard(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }
  render() {
    const { selectedItem, selectedItems } = this.state;
    return ( 
      <div className="roles">
            <div className="row" id={this.props.applicationClassId}>
              <div className="col-md-2">
              <label>{this.props.labelName}</label>
              </div>
              <div className="col-md-2">
                <Toggle className="roles-toggle"
                  id={this.props.toggleId}
                  checked={this.state.toggleState}
                  onChanged={(event)=>this.toggleChange(event,this.props.toggleId,this.props.dropdownId,this.props.labelName)}
                  onFocus={this.props.onFocusMethod(this.props.toggleId)}
                  onBlur={this.props.OnBlurMethod(this.props.toggleId)}
                />
              </div>
              <div className="col-md-8">
                <Dropdown className="roles-dropdown"
                   required={true}
                  id={this.props.dropdownId}
                  disabled={!this.state.toggleState}
                  label="Select Application Role"
                  selectedKey={selectedItem ? selectedItem.key : undefined}
                  onChanged={(event)=>this.props.onselectionChange(event,this.props.labelName,this.props.dropdownId,this.props.toggleId,this.props.applicationName,this.state.toggleState)}
                  onFocus={()=>this.props.onFocusMethod(this.props.dropdownId)}
                  onBlur={this.props.OnBlurMethod(this.props.dropdownId)}
                  options={this.props.optionsData}
                  placeHolder="Select an Option"
                />
              </div>
            </div>
          </div>
    )
  }
 }
  const mapDispatchToProps = (dispatch) => {   
      return{
        updateToggle: (isRolesSelected)=>{
            dispatch(rolesSelection(isRolesSelected))
        }
      } 
  }

export default  connect(null,mapDispatchToProps)(Roles);