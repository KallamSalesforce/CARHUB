import { LightningElement,wire,api } from 'lwc';
import getOpps from '@salesforce/apex/AccountManager.getOpps'
import { refreshApex } from '@salesforce/apex';
 
export default class DatatableWithSearchingSortingPagination extends LightningElement {
 columns =[
        {label: 'Name', fieldName: 'Name', type: 'text', sortable: true},
        {label: 'Stage',fieldName: 'StageName', sortable: true},
        {label: 'Close Date',fieldName: 'CloseDate', sortable: true}
        
    ];
    data
    searchKey = ''
    page = 1
    items = []
    startingRecord = 1;
    endingRecord = 0; 
    pageSize = 5; 
    totalRecountCount = 0;
    totalPage = 0;
    @wire(getOpps,{SearchKey:'$searchKey'})
    wiredAccounts({ error, data }) {
        if(data){
            //this.data = data
            this.items = data;
            this.totalRecountCount = data.length; 
            this.totalPage = Math.ceil(this.totalRecountCount / this.pageSize); 
            
            this.data = this.items.slice(0,this.pageSize); 
            this.endingRecord = this.pageSize;
            
            console.log(data)
        }
        else{
            console.log(error)
        }
    }
    
    handleKeyChange(event){
      this.searchKey = event.target.value
      console.log(this.searchKey);

    }
     //clicking on previous button this method will be called
     previousHandler() {
        if (this.page > 1) {
            this.page = this.page - 1; //decrease page by 1
            this.displayRecordPerPage(this.page);
        }
    }

    //clicking on next button this method will be called
    nextHandler() {
        if((this.page<this.totalPage) && this.page !== this.totalPage){
            this.page = this.page + 1; //increase page by 1
            this.displayRecordPerPage(this.page);            
        }             
    }

    displayRecordPerPage(page){

        this.startingRecord = ((page -1) * this.pageSize) ;
        this.endingRecord = (this.pageSize * page);

        this.endingRecord = (this.endingRecord > this.totalRecountCount) 
                            ? this.totalRecountCount : this.endingRecord; 

        this.data = this.items.slice(this.startingRecord, this.endingRecord);

        this.startingRecord = this.startingRecord + 1;
    }    

}