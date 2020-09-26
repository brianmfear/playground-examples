import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track isLoading;
    connectedCallback() {
        this.isLoading = true;
    }
    toggleSpinner() {
        this.isLoading = this.isLoading;
    }
}
