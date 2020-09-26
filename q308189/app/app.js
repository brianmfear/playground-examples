import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track data;
    connectedCallback() {
        // Just to show some data here //
        this.data = 'abcde'.split('').map(value=>({id:value,iconName:'utility:arrowup'}));
    }
    toggle(event) {
        const row = this.data.find(row => event.target.dataset.rowId === row.id);
        row.iconName = row.iconName === 'utility:arrowup'? 'utility:arrowdown': 'utility:arrowup';
    }
}
