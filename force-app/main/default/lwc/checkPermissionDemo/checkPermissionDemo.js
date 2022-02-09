import { LightningElement } from 'lwc';
import hasviewAllData from '@salesforce/userPermission/ViewAllData'
export default class CheckPermissionDemo extends LightningElement {

    get hasviewAllData(){
        return hasviewAllData;
    }
}