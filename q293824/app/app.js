import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track clientsList = [{name:'a'},{name:'b'}];
}
