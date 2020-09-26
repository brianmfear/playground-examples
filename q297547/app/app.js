import { LightningElement, track, api } from 'lwc';

const DEF_STYLE = 'slds-icon slds-icon-text-default';

export default class App extends LightningElement {
    isRed = false;
    @track style = DEF_STYLE;
    connectedCallback() {
        this.toggleIcon();
    }
    toggleIcon() {
        this.isRed = !this.isRed;
        this.style = `${this.isRed?'blue':'red'} ${DEF_STYLE}`;
    }
    save(){
        this.isRed = !this.isRed;
        this.style = `${this.isRed?'blue':'red'} ${DEF_STYLE}`;
    }
}
