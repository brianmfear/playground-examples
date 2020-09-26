import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    value = 0;
    connectedCallback() {
        setInterval(()=>this.value++, 1000);
    }
    get theValue() {
        return this.value*2;
    }
}
