import React from 'react';
import PropTypes from 'prop-types';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';
import './Accordion.css';

const propTypes= {
    isOpen: PropTypes.bool
}

class Accordion extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isOpen: this.props.isOpen
        }
    }

    onAccordionToggle = (isOpen) =>{
        this.setState({
            isOpen: isOpen
          });
    }
    renderChildren = (child) => {
        switch (child.type.name) {
            case 'AccordionHeader':
              return <AccordionHeader key={child.type.name} isOpen={this.state.isOpen} 
                        onAccordionToggle={this.onAccordionToggle} 
                        children={child.props.children} />
            case 'AccordionBody':
                return <AccordionBody key={child.type.name} isOpen={this.state.isOpen} children={child.props.children}/>          
            default:
              return null;
          }
    }

    render(){
        return(
            <div className="accordion">
                {this.props.children && this.props.children.map((child,index)=>{                
                                return this.renderChildren(child);
                            })}
            </div>
           
        )
    }
}

Accordion.propTypes = propTypes;
export default Accordion;
