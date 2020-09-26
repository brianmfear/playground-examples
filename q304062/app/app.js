import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track data = [];
    @track cols = [{
        label: 'Name', fieldName: 'name'
    }];
    numberOfElements = 1;
    connectedCallback() {
        this.regenerate();
    }
    handleInputChange(event) {
        this.numberOfElements = parseInt(event.target.value);
        console.log(this.numberOfElements);
        this.regenerate();
    }
    regenerate() {
        this.data = [];
        const gen = (function* (i) {
            let x = 0;
            while(x < i) {
                yield x++;
            }
        })(this.numberOfElements);
        let item = gen.next();
        while(!item.done) {
            this.data.push({id:`${item.value}`,name:`Item ${item.value}`});
            item = gen.next();
        }
    }
}
