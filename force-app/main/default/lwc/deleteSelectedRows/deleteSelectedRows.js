import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountManager.getAccounts'
import deleteselectedRecords from '@salesforce/apex/AccountManager.deleteselectedRecords' 
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
export default class DeleteSelectedRows extends LightningElement {
getDetials
columns =[
    {label:'Id',fieldName:'Id'},
    {label:'AccName',fieldName:'Name'},
    {label:'Rating',fieldName:'Rating'},
    {label:'AnnualRevenue',fieldName:'AnnualRevenue'}
];
@wire (getAccounts) getAccdetails({data,error}){
if(data){
    this.getDetials = data;
     console.log(data)
     console.log(this.getDetials)
}
else{
     console.log(error)
}
}
seletedRowIdList =[]

onselctedRowHandler(event){
    const seletedRows = event.detail.selectedRows
   console.log(seletedRows)
   for(let i=0; i< seletedRows.length; i++){
    this.seletedRowIdList.push(seletedRows[i].Id)
    console.log(this.seletedRowIdList)
   }
}

ClickDeleteRecords(){

    deleteselectedRecords({listOfIds : this.seletedRowIdList}).then(()=>
    {
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Record deleted successfully',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);
          return refreshApex(this.getAccdetails);
    }
    ).catch((error)=>{
        console.log(error)
    }
    );
}
}