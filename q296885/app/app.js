import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    outputText;
    updateText(event) {
        var temp = this.template.querySelector('lightning-input');
        if(temp.name === 'abc')
            this.outputText = temp.value;
    }
}
