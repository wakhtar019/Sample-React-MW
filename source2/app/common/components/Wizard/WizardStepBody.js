import React from "react";
import PropTypes from "prop-types";

const propTypes = {  
  children: PropTypes.any
};

const WizardStepBody = ({children}) => {  
  return(
    <div className="wizard-step-body">
      {children}
    </div>
  );
}
WizardStepBody.propTypes = propTypes;
export default WizardStepBody;
