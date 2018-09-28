import React, { Component } from 'react';
import './Home.css'
import { Controls } from '../../common/components'
import {FormattedMessage} from 'react-intl';
import { withRouter } from 'react-router-dom';

const propTypes = {

}

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <FormattedMessage id="app.title" defaultMessage="Welcome to Order UX"/>                     
                <Controls></Controls>
            </div>
        );
    }
}

Home.propTypes = propTypes;
export default withRouter(Home);