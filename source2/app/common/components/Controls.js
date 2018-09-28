import React, { Component } from 'react';
import { Accordion, AccordionHeader, AccordionBody, Pager,
    WizardStep, WizardNav, WizardStepHeader, WizardStepBody,WizardStepFooter, Card, CardBody, AutoComplete,
    CardHeader,OptionsButton } from '../../common/components'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './Controls.css';

const propTypes = {

}

const wizardSteps = [
    {
        title: "Step-1",
        currentState: 3
    },
    {
        title: "Step-2",
        currentState: 3,
    },
    {
        title: "Step-3",
        currentState: 2
    },
    {
        title: "Step-4",
        currentState: 10,
    },
    
]

let _items = [];

class Controls extends Component {

    onPageChange = (pageNo)=>{

    }

    onItemClick = (item) =>{

    }

    _getData() {
        if (_items.length === 0) {
            for (let i = 0; i < 50000; i++) {
                _items.push({
                    name: 'fileName' + i,
                    value: 'value' + i,
                });
            }
        }
        
        return _items;
    }

    async _fetchData(searchText, resolve, reject) {
        var filterRecords = searchText ? this._getData().filter(i => i.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) : this._getData();
        resolve(filterRecords);
    }
    render() {
        return (

            <div className="controls-container">
                <h2>Common Controls</h2>

                 <fieldset>
                    <legend>Accordion</legend>     
                    <Accordion>
                        <AccordionHeader>
                            Header Text
                        </AccordionHeader>
                        <AccordionBody>
                            Collapsible Content
                        </AccordionBody>
                    </Accordion>          
                </fieldset>

                 <fieldset>
                    <legend>Pager</legend>     
                    <Pager items={[1,2,3,4,5,6,7,8]} pageSize={3} onPageChange={this.onPageChange} />
                 </fieldset>

                 <fieldset>
                    <legend>Wizard</legend>     
                    <WizardNav items={wizardSteps} onItemClick={this.onItemClick}></WizardNav>
                    <WizardStep>                        
                        <WizardStepHeader title="Step-1 Header Text"/>                           
                       
                        <WizardStepBody>
                                <span>Content goes here</span>
                        </WizardStepBody>

                        <WizardStepFooter>
                            <DefaultButton
                                    primary={true}
                                    data-automation-id="test"
                                    disabled={false}
                                    text="Previous"
                                    iconProps={{ iconName: 'ChevronLeftSmall' }}
                                    onClick={()=>{}}
                                    allowDisabledFocus={true} />     
                            <DefaultButton
                                    primary={true}
                                    data-automation-id="test"
                                    disabled={false}
                                    text="Next"
                                    iconProps={{ iconName: 'ChevronRightSmall' }}
                                    onClick={()=>{}}
                                    allowDisabledFocus={true} />                       
                        </WizardStepFooter>                  
                    </WizardStep>
                 </fieldset>

                 <fieldset>
                    <legend>Card</legend>     
                    <Card isCollapsed = {false}>
                        <CardHeader>
                            <div>
                            <div className='item-left'>
                                <h5>MS OrderID</h5>
                                <h6>W0000*180987653575</h6>
                                <p>Sold To</p>
                                <h6>OEM</h6>
                                <p>Sold To Organization</p>
                                <h6>DELL INC. [00000821]</h6>
                                </div>
                                <div className='item-right'>
                                  <h5>AR Order</h5>
                                  <h6>87654321</h6>
                                  <p>Committed Date</p>
                                  <h6>08/11/2018</h6>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className='card-body'>
                                <div className='link'>
                                    <a href = '#'>View All</a>
                                </div>
                                <div className='wrap'>
                                <div className='item-left'>
                                    <h6>AR Line#</h6>
                                    <p>10</p>
                                    <p>20</p>
                                </div>
                                <div className='item-center'>
                                    <h6>End Item</h6> 
                                    <p title='[P71-08220] Windows Svr Datacntr 2016 English'>[P71-08220] Windows Svr Datacntr 2016 English</p>
                                    <p title='[P71-08220] Windows Svr Datacntr 2016 English'>[P71-08220] Windows Svr Datacntr 2016 English</p>
                                </div>
                                <div className='item-right'>
                                    <h6>Qty</h6>
                                    <p>10</p>
                                    <p>20</p>
                                </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                 </fieldset>

                  <fieldset>
                    <legend>Option Button</legend>     
                    <OptionsButton
                        options={[{ key: '1', text: 'option1'}, { key: '2', text: 'option2'} ]} 
                        onSelect={(selectedKey)=>console.log('Selected Key: ', selectedKey) }/>
                 </fieldset>

                <fieldset>
                    <legend>Auto Complete</legend>     
                    <AutoComplete records={[]} onSearch={(searchText, resolve, reject) => { this._fetchData(searchText, resolve, reject)}}/>
                 </fieldset>
            </div> 
        );
    }
}

Controls.propTypes = propTypes;
export default Controls;