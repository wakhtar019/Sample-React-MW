=================
EC-OEM-MUX-COMMON
=================
This provides common controls and utility classes for ease of development across OEM.

## Table of Contents
- [Using Common App](#using-common-app)
- [Common Controls](#common_controls)
- [Utilities](#utilities)


## Using Common App
===================

To install the application, please use the NPM as follows -
npm install -save ec-oem-mux-common

To Use the controls and utilities, please follow individual components and utilities section


## Commmon Controls
===================

Following are common controls available -

- [Accordion](#accordion)
- [Alert](#alert)
- [Auto Complete](#alert)
- [Pagination](#pagination)
- [Spinner](#pagination)
- [Wizard](#pagination)
- [Card](#card)
- [OptionsButton](#optionsButton)

##Accordion
===========

##Alert
===========

##Auto Complete
===============
 <AutoComplete records={[
    {
        name: 'n1',
        value: 'v1'
    },
    {
        name: 'n2',
        value: 'v2'
    }
    ]} onSearch={(searchText, callback) => { return this._fetchData(searchText, callback) }} />               

##Pagination
============
This control helps in paginating over data list
It has folowing components -
    - Pager
    - PageSizeSelection
    - PaginatationLabel
    - Pagination

The component can be used follows -

<Pager items={[1,2,3,4,5,6,7,8]} pageSize={3} onPageChange={this.onPageChange} />


##Spinner
=========

##Wizard
========
This control helps in wizard flow -

It has folowing 3 components -
    - WizardStep
    - WizardStepHeader
    - WizardStepBody
    - WizardStepFooter
    - WizardNav
    - WizardNavItem

The component can be used follows -
   
    <WizardNav items={[
            {
                title: "Step-1",
                currentState: 3,
            },
            {
                title: "Step-2",
                currentState: 2,
            },
            {
                title: "Step-3",
                currentState: 1,
            },
            {
                title: "Step-4",
                currentState: 10,
            },
            
        ]} onItemClick={this.onItemClick}></WizardNav>
        
    <WizardStep title="step1">                        
        <WizardStepHeader title="Step-1"/>                          
        <WizardStepBody>
                <span>test</span>
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

##Card
======
<Card>
    <CardHeader>
        <div>
            Header
        </div>
    </CardHeader>
    <CardBody>
        <div>
            Body
        </div>
    </CardBody>
</Card>

##OptionsButton
================
<OptionsButton 
options={[{ key: '1', text: 'option1'}, { key: '2', text: 'option2'} ]} 
onSelect={(selectedKey)=>console.log('Selected Key: ', selectedKey) }/>

##Utilities
============

