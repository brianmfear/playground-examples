import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track items = [
        { key: 0 }
    ];
    addNote() {
        this.items = [...this.items, { key: this.items.length}];
    }

    removeNote(){
         this.items = [this.items, { key: this.items.length-1}];
    }
}
