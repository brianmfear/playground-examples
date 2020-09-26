import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track field = { id: 'id1', value: 'hello' }
}
