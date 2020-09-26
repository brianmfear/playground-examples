import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track counter = 0;
    timerId;
    increaseCounter() {
        this.counter++;
        this.timerId = setTimeout(this.increaseCounter.bind(this), 100);
    }
    stopCounting() {
        clearTimeout(this.timerId);
    }

    mouseout(){
        console.log('mouseout');
    }

    mouseover(){
        console.log('mouseover');
    }

}