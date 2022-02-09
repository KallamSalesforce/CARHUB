import { LightningElement, wire,api} from 'lwc';
import fetchAccAndCons from '@salesforce/apex/AccountRelatedContacts.fetchAccAndCons';
import getContactsByAccountName from '@salesforce/apex/AccountRelatedContacts.getContactsByAccountName'
export default class DisplayAccountAndRelatedContacts extends LightningElement {

     getdisplayTable = false
     getContRecordsByAccName = false
     info
     contactsinfo
     changeAccName
     searchAccName
    @wire(fetchAccAndCons) getAccountsAndContacts({data,error}){
        if(data){
            this.info = data;
           console.log(data);
           window.console.log('data ==> '+JSON.stringify(data));
        }
        else{
          console.log(error);
        }
    }

    handleClick(event){
      this.getdisplayTable = true
      this.getContRecordsByAccName = false
    }
    handleClick1(){
      this.getContRecordsByAccName = true
      this.getdisplayTable = false
    }

    onChangehandler(event){
    this.changeAccName = event.target.value
    }
    handleclickEvent(){
    this.searchAccName = this.changeAccName
    console.log(this.searchAccName)
    }
    @wire(getContactsByAccountName,{text:'$searchAccName'}) getContactsDetails({data,error}){
      if(data){
        this.contactsinfo = data
        console.log(data)
      }
      else{
        console.log(error)
      }
    }
}