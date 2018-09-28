import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import React from 'react';
import {connect} from 'react-redux';



class UUMSpinner extends React.Component{

    render(){
        return(
            <React.Fragment>
            {this.props.showLoader &&  <Spinner size={SpinnerSize.large} label="Loading..." />}
    
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store,ownProps)=>{
    return {
        showLoader: store.rootReducer.showLoader
    };
  }

  export default connect(mapStateToProps)(UUMSpinner);