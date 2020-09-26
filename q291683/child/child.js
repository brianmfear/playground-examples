import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @api track;
    

    screen1Next(event) {
        this.dispatchEvent(new CustomEvent('screenonenext'));
           
    }
    
}
