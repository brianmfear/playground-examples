import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track value;
    handleChange(event) {
        // Access to this property is allowed
        this.template.querySelector('.output1').innerHTML = event.target.value;
        // And this is also allowed
        this.template.querySelector('.output2').innerText = this.template.querySelector('.output1').innerHTML;
        try {
            // Uh-oh. We can't access the child elements.
            this.template.querySelector('.output3').innerText = 
            this.template.querySelector('lightning-input').childNodes[0].innerText;
        } catch(e) {
            this.template.querySelector('.output3').innerText = e.message;
        }
        // But we can get (some) of the info from lightning-input (namely, information we can already see):
        this.template.querySelector('.output4').innerText = this.template.querySelector('lightning-input').innerText;
    }
}
