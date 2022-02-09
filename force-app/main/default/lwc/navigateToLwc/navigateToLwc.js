import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToLwc extends NavigationMixin(LightningElement) {


    navigatetoLWC(){
        
        var defination = {
            componentDef : 'c:navigationLwcTarget',
            attributes:{
                recordId: '3678990089765'
            }
        }

        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes:{
                url : '/one/one.app#'+btoa(JSON.stringify(defination))
            }
                
        })
    }
}