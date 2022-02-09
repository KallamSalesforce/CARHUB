import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

     mes = 'Hurry!!! We got Failure..............'
     cardHeading = "Parent to Child Primitive data communication"
     number = 20
     isValid = false 

     harry ='HI Come ON Guys'
     caroselData = [
         {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description.",
            alternative_text : "First card accessible description.",
            href : "https://www.example.com"
         },
         {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
            alternative_text : "Second card accessible description.",
            href : "https://www.example.com"
         },
         {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description.",
            alternative_text : "Third card accessible description.",
            href : "https://www.example.com"
         }
     ]


     val
     changeHandler(event){
         this.val = event.target.value;
     }

     clickHandler(){
        this.template.querySelector('c-p2c-slide-component').reset()
     }
}