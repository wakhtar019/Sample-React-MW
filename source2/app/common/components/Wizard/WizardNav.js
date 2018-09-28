import React from 'react';
import PropTypes from 'prop-types';
import WizardNavItem from './WizardNavItem';
import './WizardNav.css';

const propTypes = {
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
}

class WizardNav extends React.Component {
   
    //states : 1 -> Not Started, 2-> In Progress, 3 -> Completed, 0 -> Disabled
 
    render() {
        return (
            <div className="wizard-nav flat">
            <div className="flat">
            {this.props.items.map((item,index) => {
                    return <WizardNavItem key={index} title={item.title} currentState={item.currentState} onItemClick={()=>this.props.onItemClick(item)} ></WizardNavItem>
                })}
            </div>
               
            </div>
        );
    }
}
WizardNav.propTypes = propTypes;
export default WizardNav;