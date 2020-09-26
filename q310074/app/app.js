import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track testVar=false;
    currentStep='step-3';
    steps = [
        { label: 'Contacted', value: 'step-1' },
        { label: 'Open', value: 'step-2' },
        { label: 'Unqualified', value: 'step-3' },
        { label: 'Nurturing', value: 'step-4' },
        { label: 'Closed', value: 'step-5' },
    ];
    handleOnClick(event){
        this.currentStep = event.target.dataset.id;
        this.testVar = !this.testVar;  //TROUBLE MAKER STATMENT
    }

}
