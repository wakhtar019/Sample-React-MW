import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any  
};
const AccordionBody = ({ isOpen, children }) =>{
  return(
    <div className={isOpen ?"accordion-body ms-slideDownIn10":"accordion-body-hide ms-slideUpIn10"}>
      {children}
    </div>
  );
}


AccordionBody.propTypes = propTypes;

export default AccordionBody;
