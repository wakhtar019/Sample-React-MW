import React, { Children, Component, cloneElement} from 'react';
import {Collapse} from 'reactstrap';
class AccordionItem extends Component {
    render() {
        let {expanded, caption, onToggle, name, children, render, ...rest} = this.props;
        return (
            render 
                ? render({onToggle: onToggle.bind(null, name), expanded})
                : (
                    <div className={this.props.expanded ? 'acordian-item acordian-active-border clearfix' : 'acordian-item acordian-border'}>
                       <a onClick={() => onToggle(name)}>{caption}{expanded ?<span className='expand'><i className="ms-Icon ms-Icon--Remove" aria-hidden="true" ></i></span>:<span className='expand'><i className="ms-Icon ms-Icon--Add" aria-hidden="true" ></i></span>}</a>
                        <Collapse isOpen={expanded}>
                            {children} 
                        </Collapse>
                    </div>
                )
        );
    }
}
export default AccordionItem;
