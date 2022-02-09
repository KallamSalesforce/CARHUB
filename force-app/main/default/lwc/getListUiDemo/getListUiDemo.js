import { LightningElement,wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'

export default class GetListUiDemo extends LightningElement {
   
    contacts = []
    pageToken = null
    nextPageToken = null
    previousPageToken = null
    @wire(getListUi,{
        objectApiName : CONTACT_OBJECT,
        listViewApiName : 'AllContacts',
        pageSize : 5,
        sortBy : TITLE_FIELD,
        pageToken : '$pageToken'
        }) 
         listViewHandler({data,error}){
              if(data){
                  this.contacts = data.records.records
                  this.nextPageToken = data.records.nextPageToken
                  this.previousPageToken = data.records.previousPageToken
                   console.log(data)
               }
               if(error){
                   console.log(error)
                }
            }

            hadlePreviousPage(){
                this.pageToken = this.previousPageToken
            }

            hadleNextPage(){
                    this.pageToken = this.nextPageToken
            }


}