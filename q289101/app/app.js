import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    constructor() {
        super();
        this.addEventListener('createrecord', this.handleevent.bind(this));
    }

    handleevent(event)
    {
        console.log("success");
    }
}
