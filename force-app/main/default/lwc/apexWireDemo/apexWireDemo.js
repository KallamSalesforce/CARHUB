import { LightningElement,wire } from 'lwc';
import accDdetails from '@salesforce/apex/AccountHandler.accDdetails'

export default class ApexWireDemo extends LightningElement {

    accountList

    @wire(accDdetails) AccHandler

    @wire(accDdetails)
    AccHandlerFunction({data,error}){
        if(data){
            this.accountList = data.map(item =>{
                let newType = item.Type === 'Customer - Channel'? 'Channel':
                              item.Type === 'Customer - Direct'? 'Direct':'-----'
                              return {...item,newType}
            }       
                
                )
           console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}