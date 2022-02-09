import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor(){
        super()
        console.log('child Constructor is called');
    }

    connectedCallback(){
        console.log('child connectedCallback is called');
    }

    renderedCallback(){
        console.log('Child renderedCallback is called');
    }
    
    disconnectedCallback(){
        alert('Discconected Callback is removed');
    }
}