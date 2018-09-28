import React from "react";
import PropTypes from "prop-types";
import './Wizard.css';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};

const WizardStep = ({ id, children }) => {
  return (
    <div className="wizard-step">
      {children}
    </div>
  );
};

WizardStep.propTypes = propTypes;

export default WizardStep;
