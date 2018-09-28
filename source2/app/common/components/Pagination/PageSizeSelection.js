import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  interval: PropTypes.number.isRequired,
  onPageSizeChanged: PropTypes.func.isRequired,
  title: PropTypes.string
};

class PageSizeSelection extends Component { 
  render() {
    const { title, onPageSizeChanged,interval,defaultValue,length } = this.props;
    if(length<=0) return null;
    return (
      <div className="page-size-selection">
        <label>Page Size:</label>
        <select title="Page Size" id="pageSize"
          className="selectpicker"
          aria-label={title ? `${title}-filter` : "filter"}
          defaultValue = {defaultValue}
          onChange={event => onPageSizeChanged(event.target.value)}
        >
          <option>{interval}</option>
          <option>{2 * interval}</option>
          <option>{3 * interval}</option>
          <option>{5 * interval}</option>
          <option>{10 * interval}</option>
        </select>
      </div>
     
    );
  }
}

PageSizeSelection.propTypes = propTypes;

export default PageSizeSelection;
