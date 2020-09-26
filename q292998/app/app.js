import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track cols = [
        {
            fieldName: '',
            label: 'Static Icon',
            cellAttributes: { iconName: 'standard:opportunity' }
        },
        {
            fieldName: '',
            label: 'Dynamic Icon',
            class:'success',
            cellAttributes: {class:' slds-icon-standard-quip',iconName: { fieldName: 'dynamicIcon' }}
        },
        {
            fieldName: 'name',
            label: 'Name',
            cellAttributes: { class:'slds-icon-custom-custom46'}
        }
    ];
    @track data = [
        {
            id: 1, name: 'Opportunity 1', dynamicIcon: 'utility:up'
        },
        {
            id: 2, name: 'Opportunity 2', dynamicIcon: 'utility:down'
        }
    ]
}
