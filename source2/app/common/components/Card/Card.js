import * as React from 'react';
import { PropTypes } from 'prop-types';
import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import './Card.css';

const propTypes = {
    isCollapsed: PropTypes.bool,
}

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = { isCollapsed: this.props.isCollapsed };
  }

  changeState(iscollapseStatus) {
    this.setState({isCollapsed: iscollapseStatus});
  }

  renderChildren = (child,index) => {
    switch (child.type.name) {
      case 'CardHeader':
        return <CardHeader key={index} changeState={this.changeState} isCollapsed={this.state.isCollapsed} children={child.props.children} />
      case 'CardBody':
          return (this.state.isCollapsed === true ? null : <CardBody key={index} children={child.props.children}/>)          
      default:
        return null;
    }
  }

  render(){
    const childrenWithProps = this.props.children && this.props.children.map((child,index)=>{                
      return this.renderChildren(child,index);
  });

    return (
      <div className='card ms-borderColor-themePrimary--hover'>
        {childrenWithProps}
      </div>
    );
  }
}

Card.propTypes = propTypes;