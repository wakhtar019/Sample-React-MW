import React, { Children, Component, cloneElement} from 'react';
import AccordionItem from './AccordionItem';
class Accordion extends Component {
    constructor(props) {
        super(props);
        let state = {openedHash: {}};

        Children.toArray(props.children).forEach(child => {
            if (child){
                state.openedHash[child.props.name] = !!child.props.defaultOpen
            }
        });
        
        this.state = state;
    }
    get isControlled(){ return typeof this.props.onToggle === 'function' }
    expandAll = () => {
        if (this.isControlled){
            this.props.expandAll();
        } else {
            let {openedHash} = this.state;
            Object.keys(openedHash).forEach(k => openedHash[k] = true);
            this.setState({openedHash});
        }
    }
    collapseAll = () => {
        if (this.isControlled){
            this.props.collapseAll();
        } else {
            let {openedHash} = this.state;
            Object.keys(openedHash).forEach(k => openedHash[k] = false);
            this.setState({openedHash});
        }
    }
    onToggle = name => {
        if (this.isControlled){
            this.props.onToggle(name);
        } else {
            let openedHash = this.state.openedHash;
            this.setState({openedHash: {...openedHash, [name]: !openedHash[name]}});
        }
    }
    componentWillReceiveProps(nextProps) {
        let {openedHash} = this.state;

        Children.toArray(nextProps.children).filter(c => c).forEach(child => {
            if (openedHash[child.props.name] == null){
                openedHash[child.props.name] = !!child.props.defaultOpen;
            }
        });
        this.setState({openedHash});
    }
    render() {
        let {openedHash} = this.state;
        let children = Children.toArray(this.props.children);
        return (
            <div>
                {children.map(child => {
                    if (!child){
                        return child;
                    } else if (child.type === AccordionItem){
                        return cloneElement(child, {
                            expanded: this.isControlled ? child.props.expanded : openedHash[child.props.name],
                            onToggle: this.onToggle
                        });
                    } else {
                        return child;
                    }
                })}
            </div>
        );
    }
}
export default  Accordion;