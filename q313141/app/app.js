import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {

    inputValue = ''
    handleChange(e){
        this.inputValue = e.target.value

    console.log('changed', this.inputValue)
    }
    handleInputFocus(){
        console.log('focus',this.template.querySelector('lightning-input'))
        this.template.querySelector('lightning-input').focus();
    }
    handleInputBlur()
    {

        console.log('was blur');

    }
}
