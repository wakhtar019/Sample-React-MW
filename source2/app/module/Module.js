import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sample from './components/Sample/Sample'
import './Module.css'



class Module extends Component {
    render() {
        return (
            <div className="module-container">
                <Sample></Sample>
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