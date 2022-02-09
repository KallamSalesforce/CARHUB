import { LightningElement,api,wire } from 'lwc';
import {getRecord,getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REV_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class GetRecordDemo extends LightningElement {
    @api recordId 
    name
    annualRevenue
    OwnerName

    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,OWNER_FIELD,ANNUAL_REV_FIELD]})    
    getrecordFunction({data,error}){
        if(data){

            this.name = getFieldValue(data,NAME_FIELD)
            this.annualRevenue = getFieldDisplayValue(data,ANNUAL_REV_FIELD)
            this.OwnerName = getFieldValue(data,OWNER_FIELD)
            console.log(data)
        }
    }
    
    // @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})    
    // getrecordFunction({data,error}){
    //     if(data){

    //         this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
    //         this.annualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
    //         this.OwnerName = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value
    //         console.log(data)
    //     }
    // }


}