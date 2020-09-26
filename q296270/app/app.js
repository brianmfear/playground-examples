import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track pageRecords;
    @track allRecords;
    @track thisPage = 0;
    @track pageSize = 10;
    @track sortedBy = 'value1';
    @track sortedDirection = 'asc';
    @track columns = [
        { fieldName: 'value1', label: 'Value 1', sortable: true, type: 'number' },
        { fieldName: 'value2', label: 'Value 2', sortable: true, type: 'number' }
    ];
    connectedCallback() {
        let data = [];
        while(data.length < 1000) {
            
        }
        this.allRecords = data;
        this.maxPage = Math.floor((this.allRecords.length+this.pageSize-1)/this.pageSize);
        this.sort();
    }
    sort(event) {
        if(event) {
            this.sortedDirection = event.detail.sortDirection;
            this.sortedBy = event.detail.fieldName;
        }
        let direction = this.sortedDirection === 'asc'? 1: -1;
        this.allRecords = this.allRecords.sort(
            (a,b) => (a[this.sortedBy]-b[this.sortedBy])*direction
        );
        this.loadPage();
    }
    loadPage() {
        this.pageRecords = this.allRecords.filter(
            (v,i) => Math.floor(i/this.pageSize)===this.thisPage
        );
    }
    prevPage() {
        if(this.thisPage) {
            this.thisPage = this.thisPage - 1;
            this.loadPage();
        }
    }
    nextPage() {
        if(this.thisPage < this.maxPage) {
            this.thisPage = this.thisPage + 1;
            this.loadPage();
        }
    }
}
