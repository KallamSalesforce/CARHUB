import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id'
import {getRecord} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';

const fields = [NAME_FIELD,EMAIL_FIELD]

export default class WireDemoUserDetails extends LightningElement {
    userId = Id
    //0055g00000DOHl4AAH
    
    userDetails
    @wire(getRecord,{recordId:'0055g00000DOHl4AAH', fields:fields})
    userDetailHandler({data,error}){
        if(data){
            this.userDetails = data.fields
            console.log(data);
        }
        if(error){
            console.error(error);
        }
    }

    @wire(getRecord, {recordId:'0055g00000DOHl4AAH',fields:['User.Name','User.Email']})
    userDetailsProperty;
}