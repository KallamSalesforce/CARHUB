import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordRelationshipPage extends NavigationMixin(LightningElement) {

    navigateToRecordRelationshipPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes : {
                recordId :'0015g00000XB2yvAAD',
                objectApiName : 'Account',
                relationshipApiName :'Contacts',
                actionName : 'view'
            }
        })
    }
}