import { LightningElement,api } from 'lwc';

export default class P2cSlideComponent extends LightningElement {
    @api value =20

    changeSlider(event){
        this.value = event.target.value 
    }

    @api
    reset(){
        this.value = 50
    }
}