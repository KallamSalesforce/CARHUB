import { LightningElement } from 'lwc';

export default class Lifecycle_Parent extends LightningElement {
    isChildVisiable = false
    variable
    constructor(){
        super()
        console.log('Parent Constructor is called');
    }

    connectedCallback(){
        this.variable = 'Salesforce'
        console.log('Parent connectedCallback is called');
        console.log(this.template.isConnected);
        console.log(this.template.querySelector('div'));
        console.log(this.variable);
    }

    renderedCallback(){
        console.log('Parent renderedCallback is called');
    }
    
    handleClick(){
        this.isChildVisiable = !this.isChildVisiable
    }
   
}