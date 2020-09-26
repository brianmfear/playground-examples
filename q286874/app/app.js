import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    timeoutId;

    @track input;
    @track output;

    onChangeHandler(event) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(this.doAction.bind(this, event.target), 1000);
    }

    doAction(target) {
        this.output = target.value;
    }
}
