import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track value1;
    @track value2;
    @track value3;
    @track value4;
    update(event) {
        if(event.target.type==='text') {
            this[event.target.name] = event.target.value;
        }
        if(event.target.type==='checkbox') {
            this[event.target.name] = event.target.checked;
        }
        if(event.target.tagName==='SELECT') {
            if(event.target.multiple) {
                this[event.target.name] = [...event.target.selectedOptions].map(value=>value.value).join(',');
            } else {
                this[event.target.name] = event.target.options[event.target.selectedIndex].value;
            }
        }
    }
}
