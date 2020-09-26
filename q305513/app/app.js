import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    value;
    months;
    connectedCallback() {
        this.months = [...Array(12).keys()]
        .map(k=>({label: `${k+1}`, value: `${k+1}`}));
    }
    handleMonthChange(event) {
        this.value = event.detail.value;
    }
}
