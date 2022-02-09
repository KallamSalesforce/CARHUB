import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    navigatetoNewRecordPage(){
        this[NavigationMixin.Navigate]({
             type: 'standard__objectPage',
             attributes : {
               objectApiName : 'Contact',
               actionName : 'new'
             }
    })
}
    navigatetoNewRecordPagewithDefault()
      {
        const defaultValue = encodeDefaultFieldValues({
           Name : 'Kallam123456'
        })
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes : {
                objectApiName : 'Account',
                actionName : 'new'
                },
                state :{
                    defaultFieldValues : defaultValue
                }
        })
      }
     
      navigateToListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes : {
              objectApiName : 'Account',
              actionName : 'list'
            },
            state :{
                filterName : 'Recent'
            }
         })
      }
      
      navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes : {
              objectApiName : 'ContentDocument',
              actionName : 'home'
            }
   })
      }

}