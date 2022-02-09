import { LightningElement, api} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT  from '@salesforce/schema/Account'
import ACCOUNT_NAME  from '@salesforce/schema/Account.Name'
import ACCOUNT_ANNREV  from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_RATING  from '@salesforce/schema/Account.Rating'
import ACCOUNT_TYPE  from '@salesforce/schema/Account.Type'

export default class RecordFormDemo extends LightningElement {
    @api recordId
    objectName = ACCOUNT_OBJECT
    fieldValues = [ACCOUNT_NAME,ACCOUNT_ANNREV,ACCOUNT_RATING,ACCOUNT_TYPE]
    
    SucessHandler(event){
        console.log(event.detail.id)
         this.recordId = event.detail.id
         
       const showToast =  new ShowToastEvent({
            title : 'Account is created',
            message : 'Account Record Id is'+event.detail.id,
            variant : 'success'
        });
         this.dispatchEvent(showToast);
    }


}