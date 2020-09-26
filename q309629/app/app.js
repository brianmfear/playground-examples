import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    toggle() {
        let el = this.template.querySelector('lightning-input');
          console.log('el : ' , el);
        el.checked = !el.checked;

        for(let i=0;i<5;i++){
            let x = this.template.querySelector('[data-id="buttons"]');
                 
            console.log('x : ' ,x);
           
    }
    }
}
