import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track last = 'none';
    click(event) {
        this.last = event.target.dataset.name;
    }
}
