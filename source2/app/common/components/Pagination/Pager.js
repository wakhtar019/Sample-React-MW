import React, { Component } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import PageSizeSelection from "./PageSizeSelection";
import PaginatationLabel from "./PaginatationLabel";
import './Pagination.css';

const propTypes = {
  items: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
  title: PropTypes.string,
  onPageChange: PropTypes.func.isRequired
};

const defaultProps = {
  pageSize: 10
};

class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageSize: this.props.pageSize ? this.props.pageSize : defaultProps.pageSize,
      interval: this.props.pageSize ? this.props.pageSize : defaultProps.pageSize,
      currentPage: 1
    };
  }
  componentDidMount() {
    this.setState({
      currentPageSize: this.props.pageSize ? this.props.pageSize : defaultProps.pageSize,
      interval: this.props.pageSize ? this.props.pageSize : defaultProps.pageSize
    });
  }

  onPageSizeChanged = value => {
    this.setState({ currentPageSize: Number.parseInt(value) });
  };

  onChangePage = page => {
    this.setState({ currentPage: page });
    this.props.onPageChange(page);
  };

  render() {
    const {
      items,
      title
    } = this.props;
    if (!items) return null;
    const { interval, currentPageSize, currentPage } = this.state;

    return (
      <React.Fragment>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-md6 pager">
              <PageSizeSelection
                interval={interval}
                length={items.length}
                onPageSizeChanged={this.onPageSizeChanged}
              />
              <PaginatationLabel
                currentPage={currentPage}
                currentPageSize={currentPageSize}
                length={items.length}
                title={title}
              />
            </div>
            <div className="ms-Grid-col ms-md6 pager">
              <Pagination
                items={items}
                pageSize={currentPageSize}
                onChangePage={this.onChangePage}
              />
            </div>
          </div>
        </div>




      </React.Fragment>
    );
  }
}

Pager.propTypes = propTypes;
export default Pager;
