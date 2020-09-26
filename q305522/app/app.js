import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    tabIcon;

    showWarning() {
        this.tabIcon = 'utility:warning';
    }
    showSuccess() {
        this.tabIcon = 'utility:success';
    }
}
