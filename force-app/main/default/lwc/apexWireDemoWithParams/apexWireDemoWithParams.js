import { LightningElement,wire } from 'lwc';
import filterAccDdetails from '@salesforce/apex/AccountHandler.filterAccDdetails'

export default class ApexWireDemoWithParams extends LightningElement {
    
    searchType = ''

    @wire(filterAccDdetails,{type:'$searchType'}) accountDetails

    get typeOptions(){
        return [
            {label:'Customer - Direct', value:'Customer - Direct'},
            {label:'Customer - Channel', value:'Customer - Channel'}
        ]
    }

    changeHandler(event){
        this.searchType = event.target.value
    }
}