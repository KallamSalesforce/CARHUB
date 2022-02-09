import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactManager.getContacts'

export default class FilteringTable extends LightningElement {

    headings = ['Name','ID','EMAIL','Title']
    fullTabledata = []
    filteredData = []
    //value = 'Name';
    // get options() {
    //     return [
    //         { label: 'NAME', value: 'Name' },
    //         { label: 'ID', value: 'Id' },
    //         { label: 'EMAIL', value: 'Email' },
    //         { label: 'Title', value: 'Title'}
    //     ];
    // }
    @wire (getContacts) contactddetails({data,error}){
        if(data){
            this.fullTabledata = data
            this.filteredData = data
            console.log(data)
        }
        if(error){
            console.log(error)
        }
    }

    filterHandler(event){
        const val = event.target.value
        console.log(val)

          this.filteredData  = this.fullTabledata.filter( eachObj =>{
                 return Object.keys(eachObj).some(key =>{
                     return eachObj[key].toLowerCase().includes(val)
                 })
             })
    }
         
    
}