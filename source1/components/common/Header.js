import React from 'react';
import {Link} from 'react-router-dom'



 class Header extends React.Component{
    render(){
    return (
      <div id="Header">
      
      <Link to="/">
            <span>VOLUME LICENCING - Unified User Management Service</span>
      </Link>
      </div>
    )
  }
  }
export default Header;
