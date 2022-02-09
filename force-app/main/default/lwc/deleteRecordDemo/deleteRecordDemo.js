import { LightningElement } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class DeleteRecordDemo extends LightningElement {

    recordId
    changeHandler(event){
        this.recordId = event.detail.value
    }

    clickHandler(){
        deleteRecord(this.recordId).then(result=>{
            console.log('Record is Succsfulliy created')
            this.showToast('DeleteRecord','Sucessfully delted ','success')
        }).catch(error =>{
            console.error(error)
            this.showToast('Unable to DeleteRecord','Not able to delete ','error')
        })
    }

    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant : variant || 'success'
        }))
    }
}