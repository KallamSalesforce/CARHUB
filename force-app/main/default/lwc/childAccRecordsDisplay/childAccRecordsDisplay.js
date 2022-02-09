import { LightningElement,wire } from 'lwc';
import accDdetails from '@salesforce/apex/AccountHandler.accDdetails'
export default class ChildAccRecordsDisplay extends LightningElement {
    selectAccId;
    accDetails;
    @wire (accDdetails) getAccDetails({data,error}){
    
        if(data){
            this.accDetails = data;
            console.log(data)
            console.log("step1")
        }
        else{
            console.log(error)
        }
    }
    
    SelectHandler(event){
        this.selectAccId = event.target.value
        console.log(this.selectAccId)
        const eve = new CustomEvent('selectaccbyradiobutton',{detail:this.selectAccId});
        this.dispatchEvent(eve);
        console.log("Event fired from child")
    }
    
}