import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    amount = 0;
    handleAmountChange(event) {
        this.amount = parseFloat(event.target.value);
    }
}
