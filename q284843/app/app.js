import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track rows;
    connectedCallback() {
        this.rows = [{id:0,value:'', test:''},{id:1,value:'', test:''},{id:2,value:'', test:''}];
    }
    handleChange(event) {
        this.rows[0].test = '1';
        this.rows[event.target.closest('[data-key]').dataset.key].value = event.target.value;
    }
}