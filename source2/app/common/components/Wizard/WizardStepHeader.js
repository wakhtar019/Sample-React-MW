import React from "react";
import PropTypes from "prop-types";

const propTypes = {  
  title: PropTypes.string.isRequired
};

const WizardStepHeader = ({title}) => {
  return(
    <div className="wizard-step-header">      
        <span>{title}</span>
    </div>
  );
}
WizardStepHeader.propTypes = propTypes;
export default WizardStepHeader;
