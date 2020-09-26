import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
            value: []
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
            value: []
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
            value: []
        },
    ];
    get options() {
        return [
            { label: '', value: 'option1' },
           
        ];
    }
}
