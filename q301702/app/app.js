import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track optionSelected;

getSelection(event) {
    this.optionSelected = event.detail.value;
}

get isOption1(){return this.optionSelected == 'Opt1'}
get isOption2(){return this.optionSelected == 'Opt2'}

get myoptions() {
    return [
        { label: 'Y', value: 'Opt1' },
        { label: 'N', value: 'Opt2' },
    ];
}

}
