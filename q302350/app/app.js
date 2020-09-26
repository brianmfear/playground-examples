import { LightningElement, track } from 'lwc';

export default class DualListboxSimple extends LightningElement {

    @track iteList = ["a","b","x"];

    get options() {
        return [
            { label: 'English', value: 'en' },
            { label: 'German', value: 'de' },
            { label: 'Spanish', value: 'es' },
            { label: 'French', value: 'fr' },
            { label: 'Italian', value: 'it' },
            { label: 'Japanese', value: 'ja' },
        ];
    }
renderedCallback() {
for (let item in this.template.querySelectorAll('lightning-dual-listbox')){
    this.template.querySelectorAll('lightning-dual-listbox')[item].focus();
}

}
    

    
}
