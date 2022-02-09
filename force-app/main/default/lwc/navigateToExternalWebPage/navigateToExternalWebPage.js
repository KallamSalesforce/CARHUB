import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToExternalWebPage extends NavigationMixin(LightningElement) {

    navigateToExternalUrl(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes : {
                url :'https://www.salesforcetroop.com'
            }
        })
    }
}