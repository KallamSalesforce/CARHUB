import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    clickModalEvent(){
        const evn = new CustomEvent('modalbutton')
        this.dispatchEvent(evn)
    }
}