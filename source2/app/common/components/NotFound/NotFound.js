import React from 'react';
import './NotFound.css';
import notfoundimg from '../../../../resources/images/404-img.jpg' 
export const NotFound = () => {
    return (
            <div className="not-found-container">
                <img src={notfoundimg} height="300px" alt="Requested Resource not found"/>
            </div>
    );
}
export default NotFound;