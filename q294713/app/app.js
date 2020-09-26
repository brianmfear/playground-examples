import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track cols = [{label:'Value',sortable:true,
    fieldName:'value',type:'number'}];
    @track data = [1,2,3,4,5].map(v=>({id:v,value:v}));
    @track sortBy = 'value';
    @track sortDir = 'asc';
    connectedCallback() {
        
    }
    update(event) {
        this.sortDir = event.detail.sortDirection;
        console.log(this.sortDir);
        this.sortBy = event.detail.fieldName;
        let sortOrder = this.sortDir === 'asc'? 1: -1;
        let field = a => a[this.sortBy] || '';
        this.data = [...this.data.sort(
            (a,b)=>(a=field(a),b=field(b),
            (sortOrder*(a>b)-(b>a)))
        )];
        console.log(this.data[0].value);
    }
}
