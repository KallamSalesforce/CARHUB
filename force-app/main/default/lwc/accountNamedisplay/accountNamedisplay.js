import { LightningElement,wire,api} from 'lwc';
import getAccounts from '@salesforce/apex/getAccountsName.getAccounts';

export default class AccountNamedisplay extends LightningElement {

     info 
     @api accountIdfromParent
    @wire(getAccounts) getAccountDetails ({data,error}){

        if(data){
            this.info = data
            console.log(this.info);
            console.log(data);
        }
        else{
            console.log(error)
        }
    }
    clickHandler(event){
        event.preventDefault();
        this.accountIdfromParent = event.target.dataset.accountid;
        console.log(this.accountId);
    }
   
}