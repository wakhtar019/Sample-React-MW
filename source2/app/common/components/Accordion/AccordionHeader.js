import React from "react";
import PropTypes from "prop-types";

const propTypes = {  
  isOpen: PropTypes.bool,
  onAccordionToggle: PropTypes.func,
  children: PropTypes.any,
};



const AccordionHeader = ({ isOpen, onAccordionToggle,children}) => {
  
  return(
    <div className="accordion-header" >      
      <div className="accordion-header-text">
        {children}
      </div> 
      <div className="accordion-header-icon" onClick={() => onAccordionToggle(!isOpen)}>
        {isOpen ? <i className="ms-Icon ms-Icon--ChevronUp ms-slideUpIn10" aria-hidden="true"></i> : 
          <i className="ms-Icon ms-Icon--ChevronDown ms-slideDownIn10"></i>}
      </div>        
    </div>
  );
}
AccordionHeader.propTypes = propTypes;
export default AccordionHeader;
