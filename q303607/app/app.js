import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track options = [
        { label: 'Value 1', value: '1' },
        { label: 'Value 2', value: '2' },
        { label: 'Value 3', value: '3' },
        { label: 'Value 4', value: '4' }
    ];
    @track defaultValues = [];
    setValues(event) {
        this.defaultValues = [1];
    }
}
