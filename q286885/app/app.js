import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track myItem;
    items = ["apple", "banana", "pear"];

    connectedCallback() {
        console.warn(this.myItem);
    }
}
