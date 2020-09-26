import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track firstName;
    @track lastName;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    updateFields(event) {
        this[event.target.name] = event.target.value;
    }
}
