import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    currentState: PropTypes.number.isRequired,
    onItemClick: PropTypes.func
}

const WizardNavItem = ({title, currentState, onItemClick}) => { 
    const getItemStyle = () =>{
        switch(currentState){
            case 1:
                return "not-started";
            case 2:
                return "in-progress";
            case 3:
                return "completed";
            case 4:
                return "error";
            default:
                return "disabled";
        }
    }

    return(
        <a href="javascript:void(0);" title={getItemStyle() && getItemStyle().toUpperCase()} className={getItemStyle()} onClick={onItemClick}>{title}</a>
    )
} 

WizardNavItem.propTypes = propTypes;
export default WizardNavItem;