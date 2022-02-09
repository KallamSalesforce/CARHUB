import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    showModal = false

    clickHandlerToGetModal(){
      this.showModal = true
    }

    handleClick(event){
        this.showModal = false
    }
}