import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as sampleActions from './Sample.actions';
import {bindActionCreators} from 'redux';


class Sample extends React.Component {
    constructor(props,context){
        super(props,context);

        this.getUsers = this.getUsers.bind(this);
    }
    render() {
        return (
            <div>
                  <button onClick={this.getUsers}>Get Users</button>
            </div>
        );
    } 

    getUsers(event){
       this.props.actions.getUsers();
       console.log('test');
    }
}

Sample.propTypes = {
     actions: PropTypes.object.isRequired
 }

function mapStateToProps(state) {
    return {
        users: state.users,
        repos: state.repos
    };
}

 const mapDispatchToProps = (dispatch, ownProps) => {
     return {
         actions: bindActionCreators(sampleActions,dispatch)
     }
 } 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sample);