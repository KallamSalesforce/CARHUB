import { LightningElement } from 'lwc';

export default class PracticeComponent extends LightningElement {

    text = '<h1>MYSync</h1>';
    text1 = '<h2>MyOrders<h2>';
    text2 = '<h2>Calender</h2>';
    text3 = '<h2>OPP Supply</h2>';
    text4 = '<h2>Messages</h2>';
    text5 = '<h2>Numbers</h2>';
    

    cilckHandler(){
       this.text = 'Hello'

    }

}