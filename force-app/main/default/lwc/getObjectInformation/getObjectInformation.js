import { LightningElement,api,wire,track } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class GetObjectInformation extends LightningElement {
    @api recordId;
    @api objApiName;
    getRecordtypeId
    @track PicklistValuesAre
    @wire (getObjectInfo,{objectApiName: ACCOUNT_OBJECT}) 
    objectInfo({data,error}){
         if(data){
            console.log(data);
            this.getRecordtypeId = data.defaultRecordTypeId;
            this.objApiName = data.apiName;
            console.log(this.getRecordtypeId);
         }
         else{
             console.log(error);
         }
        
    }
    @wire(getPicklistValues,{recordTypeId:'$getRecordtypeId',fieldApiName:INDUSTRY_FIELD})
    getpicklistValueDetails({data,error}){
        if(data){
                       this.PicklistValuesAre = data.values
               console.log('PickList Values are',this.PicklistValuesAre);       
               console.log('pickList Valyes are ', data.values);    
        }
        else{

        }
    }

}