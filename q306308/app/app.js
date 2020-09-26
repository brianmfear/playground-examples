import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    _allData = [
        { id: '1', Name: 'Marc Benioff',  MoeId:'3434'},
        { id: '2', Name: 'PEPE', MoeId:'5564'},
        { id: '3', Name: 'SAM', MoeId:'7767'},
        { id: '4', Name: 'Arnold Schwarzenegger', MoeId:'5544' }
    ];
    data = [];
    columns = [
        { label: 'People I Have Heard Of', fieldName: 'Name'},
        { label: 'Moe Id', fieldName: 'MoeId'},
    ];
    connectedCallback() {
        this.data = [...this._allData];
    }
    updateSearch(event) {
        var regex = new RegExp(event.target.value,'gi')
        

            this.data = this._allData.filter(
                row => regex.test(row.MoeId)
            );

        if(this.data.length == 0 ){
             this.data = this._allData.filter(
                row => regex.test(row.Name)
             );
        }
            
        
    }
}
