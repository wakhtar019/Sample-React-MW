import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Order.css'



class Order extends Component {
    render() {
        return (
            <div className="module-container">
               Order Page
            </div>
         );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(Module);