import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track optionList = [{label:'-- none --',value:''}];
    @track value;
    newValue;
    newLabel;
    setNewValue(event) {
        this.newValue = event.target.value;
    }
    setNewLabel(event) {
        this.newLabel = event.target.value;
    }
    addNewOption() {
        this.optionList = [...this.optionList, {label: this.newLabel+'', value: this.newValue+''}];
        this.newValue = '';
        this.newLabel = '';
        if(this.optionList.length===1) {
            this.value = this.optionList[0].value;
        }
    }
     deleteOption() {
        const array =  [...this.optionList, {label: this.newLabel+'', value: this.newValue+''}];
        console.log('array'+array);
		const index = array.indexOf(this.newValue);
		if (index > -1) {
		array.splice(index, 1);
		}
        this.newValue = '';
        this.newLabel = '';
        
    }
}
