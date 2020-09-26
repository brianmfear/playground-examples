import { LightningElement  } from 'lwc';

export default class App extends LightningElement {
    cols = [
        { fieldName: 'name', label: 'Name' }
    ];
    data = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' }
    ];
    selected = [];
    connectedCallback() {
        // setTimeout(()=>this.selected = this.data.map(k=>k.id));
        setTimeout(()=>this.selected = ['1']);
    }
}
