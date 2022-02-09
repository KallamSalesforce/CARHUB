import { LightningElement,api } from 'lwc';

export default class SetterChildDemo extends LightningElement {
    
    user_details

    // Without modifing data from parent component
    // @api details  

    @api
    get details(){
        return this.user_details
    }

    set details(data){
        let newAge = data.age*2
      this.user_details = {...data,age:newAge,location:'Chennai'}
    }
}