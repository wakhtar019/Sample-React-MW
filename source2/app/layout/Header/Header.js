
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { CommandBar} from 'office-ui-fabric-react/lib/CommandBar';
import PropTypes from 'prop-types';
import './Header.css';
import { createTheme } from 'office-ui-fabric-react/lib/Styling';
import { Customizer } from 'office-ui-fabric-react/lib/Utilities';
import headerThemes from './HeaderThemes.json';
import history from '../../../history'


const propTypes = {
    theme: PropTypes.string
}


class Header extends Component {

    getTheme = (themeName) => {
        let theme = {};
        theme.palette = themeName && headerThemes && headerThemes[themeName];
        return createTheme(theme);
    }   

    getHeaderItems = () => {
        return [
            {
                key: "Home",
                name: "Home",   
                onClick: () => history.push('/Home'),
            },  
            {
                key: "Orders",
                name: "Orders",
                subMenuProps: {
                    items: [
                        {
                            key: "DashBoard",
                            name: "DashBoard",                              
                            onClick: () => history.push('/DashBoard')       
                        },
                        {
                            key: "CreateOrder",
                            name: "Create Order",       
                            onClick: () => history.push('/CreateOrder')  
                        },    
                        {
                            key: "SearchOrder",
                            name: "Search Order",  
                            onClick: () => history.push('/SearchOrder')               
                        }
                    ]
                }
            }
        ];
    }

    headerRightItems = () => {
        return [
            {
                key: "Home",
                name: "Welcome User",   
                onClick: () => history.push('/Home'),
            }            
        ];
    }

  
    render() {
        return (
            <header className="header-wrapper">
                <Customizer settings={{ theme: this.getTheme(this.props.theme) }}>
                    <CommandBar farItems={this.headerRightItems()} items={this.getHeaderItems()}  />
                </Customizer>
            </header>                
        )
    }
}
Header.propTypes = propTypes;

export default Header;



