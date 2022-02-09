import { LightningElement } from 'lwc';

export default class FirstLwc extends LightningElement {
    message 
    ChangeHandler(event){
        this.message = event.target.value
    }
}