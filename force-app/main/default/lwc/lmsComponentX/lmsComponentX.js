import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import {subscribe,unsubscribe, MessageContext, APPLICATION_SCOPE} from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {

    recivedMessage
    subscription
    @wire (MessageContext) context

    connectedCallback(){
       this.subscribeMessage()
    }

    subscribeMessage(){
         //subscribe(messageContext, messageChannel, listener, subscriberOptions)
    this.subscription = subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})

    }
   
    handleMessage(message){
        this.recivedMessage = message.lmsData.value? message.lmsData.value : 'NO Message Published'
    }

    unsubscribeMessage(){
         unsubscribe(this.subscription)
         this.subscription = null
    }
}