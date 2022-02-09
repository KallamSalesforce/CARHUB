import { LightningElement,wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountManager.getAccountRecords'

export default class FilteringData extends LightningElement {

    info      
    filteredData
    @wire (getAccountRecords) getDetails({data,error}){
        if(data){
         this.info = data         
         this.filteredData = data
         console.log(data)
        }
        else{
          console.log(error)
        }
    }

    onchangeEvent(event){
       const {value} = event.target
        console.log(value)
       this.filteredData =  this.info.filter(eachObj =>{
            return Object.keys(eachObj).some(key =>{
                return eachObj[key].toLowerCase().includes(value)
            })
        })
    }

    
}