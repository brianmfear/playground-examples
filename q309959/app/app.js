import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    dateCheck = 'Not Checked';
    check(event) {
        this.dateCheck = this.template.querySelector('lightning-input').value? 'Populated': 'Not Populated';
    }
}
