import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactManager.getContacts'
export default class filteringAndSorting extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData=[]
    filteredData=[]
    timer
    @wire(getContactList)
    contactHandler({data, error}){
        if(data){
            console.log(data)
            this.fullTableData = data
            this.filteredData= data
        }
        if(error){
            console.log(error)
        }
    }

    

    filterHandler(event){
        const {value} = event.target
       
        if(value){  
                window.clearTimeout(this.timer)  
            this.timer = window.setTimeout(()=>{
                console.log(value)
                this.filteredData = this.fullTableData.filter(eachObj=>{
                    // if(this.filterBy === 'All'){
                        /**Below logic will filter each and every property of object */
                        return Object.keys(eachObj).some(key=>{
                            return eachObj[key].toLowerCase().includes(value)
                        })
                    
                    })
            },1000)   
                
                
            
        } else {
            this.filteredData = [...this.fullTableData]
        }
        
    }
}