import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track data = [{id:'1',name:'Demo'}];
    @track cols = [{label:'Name',fieldName:'name'}];
}
