import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    
    screen2Back() {
        this.dispatchEvent(new CustomEvent('screen2back'))    
    }
}
