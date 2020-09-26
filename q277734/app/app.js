import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    // Option 1 //
    @track variant1 = 'neutral';
    makeSuccess1() {
        this.variant1 = 'success';
    }

    // Option 2 //
    @track success = false;
    makeSuccess2() {
        this.success = true;
    }
    get variant2() {
        return this.success? 'success': 'neutral';
    }

    // Option 3 //
    makeSuccess3(event) {
        event.target.variant="success";
    }
}
