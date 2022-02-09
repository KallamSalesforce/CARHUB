import { LightningElement, wire,api } from 'lwc';
import getRelatedContacts from '@salesforce/apex/GetContacts.getRelatedContacts'

export default class GetrelatedContactRecords extends LightningElement {
   columns =[
       {label: 'FirstName', fieldName:'firstName'},
       {label: 'LastName', fieldName:'LastName'},
       {label:'Email', fieldName:'Email', type:'email'},
   ];
    getConInfo
    @api accountId
    @wire(getRelatedContacts,{text:'$accountId'}) relatedContactinfo({data,error}){
        if(data){
            this.getConInfo = data;
          console.log(data);
        }
        else{
        console.log(error);
        }
    }
}