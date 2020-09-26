import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track clientServiceNames = [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2' }
    ];
    @track prodAttributeRecords = [
        {
            value: 5
        },
        {
            value: 10
        }
    ]
}
