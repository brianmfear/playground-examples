import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track lastClickId = 'None';
    @track lastClickName = 'None';
    click(event) {
        this.lastClickId = event.target.id;
        this.lastClickName = event.target.name;
    }
}
