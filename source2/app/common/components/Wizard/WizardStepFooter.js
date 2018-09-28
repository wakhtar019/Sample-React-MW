import React from "react";
import PropTypes from "prop-types";

const propTypes = {  
  children: PropTypes.any
};

const WizardStepFooter = ({children}) => {
  return(
    <div className="wizard-step-footer">  
        <div className="button-group">
          {children}
        </div>    
      
    </div>
  );
}
WizardStepFooter.propTypes = propTypes;
export default WizardStepFooter;
