import { LightningElement } from 'lwc';

export default class CheckboxValue extends LightningElement {
    
    // value = [];

    // get options() {
    //     return [
    //         { label: 'Ross', value: 'option1' },
    //         { label: 'Rachel', value: 'option2' },
    //     ];
    // }

    // get selectedValues() {
    //     return this.value.join(',');
    // }

    // handleChange(e) {
    //     this.value = e.detail.value;
    //     console.log(this.value)
    // }

    value 

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}