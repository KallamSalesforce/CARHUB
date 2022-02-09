import { LightningElement,wire } from 'lwc';
import getrelatedContactDetails from '@salesforce/apex/AccountHandler.getrelatedContactDetails'
export default class DisplayConBySelectionAccRadioButton extends LightningElement {

    accountId
    getcondetails
    clickHadler(event){
        this.accountId = event.detail;
        console.log(">>>>AccID>>>>>")
        console.log(this.accountId);
    }
    @wire (getrelatedContactDetails,{id:'$accountId'}) getdetails({data,error}){
     if(data){
         this.getcondetails = data
         console.log('For Refference')
        console.log(data)
     }
     else{
         console.log(error)   
     }
    
    }
}