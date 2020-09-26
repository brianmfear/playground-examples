import { track, LightningElement } from 'lwc';

export default class App extends LightningElement {    
    @track statusOptions = [
        
    ];
    @track value = 'new';

    handleValueUpdate(event) {
        console.log('Do something...');
    }

}
