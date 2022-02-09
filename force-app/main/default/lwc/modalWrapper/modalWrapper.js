import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {

    ModalWindow = false
    clickHandler(event){
         console.log('Cliked on Modal')
        this.ModalWindow = true
    }

    closeHandler(event){
         this.ModalWindow = false
    }
}