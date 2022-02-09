import { LightningElement } from 'lwc';
import getAccDetails from '@salesforce/apex/AccountHandler.getAccDetails'

export default class ApexImperativeWithParamaDemo extends LightningElement {

    serachName=''
    accountDetails
    timer
    changeHandler(event){
           window.clearTimeout(this.timer)
           this.serachName = event.target.value 
           this.timer= setTimeout(()=>{
               this.callApex()
           },2000)
           
    }

    callApex(){
        getAccDetails({searchText : this.serachName}).then(result =>{
            this.accountDetails = result
            console.log(result)
        }).catch(error =>{
            console.error(error)
        })
    }
}