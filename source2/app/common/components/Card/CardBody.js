
import * as React from 'react';

export class CardBody extends React.Component {
  render(){
    return (
      <div className='card-body ms-slideDownIn10'>
        {this.props.children}        
        <div className='error-box'>
          <p>Errors!</p>
        </div>
      </div>
    );
  }
}