import { LightningElement, track, api } from 'lwc';

const ALLFIELDS = [
{
    fieldName: "field1",
    label: "Field A",
    type: "text"
},
{
    fieldName: "field2",
    label: "Field B",
    type: "text"
},
{
    fieldName: "field3",
    label: "Field C",
    type: "text"
}
];
const DATA = [
    { id: "1", field1: "A", field2: "B", field3: "C" },
    { id: "2", field1: "D", field2: "E", field3: "F" },
    { id: "3", field1: "G", field2: "H", field3: "I" },
];
export default class App extends LightningElement {
    data = DATA;
    @track cols;
    @track fields;
    connectedCallback() {
        this.cols = [...ALLFIELDS];
        this.fields = ALLFIELDS.map(
            (field,index) => ({ id: `${index}`, checked: true, ...field})
        )
    }
    updateColumns(event) {
        this.fields
        .find(field => event.target.dataset.fieldName === field.fieldName)
        .checked = event.target.checked;
        this.cols = 
            this.fields
            .filter(field => field.checked)
            .map(
                field => ALLFIELDS.find(field2 => field.fieldName === field2.fieldName)
            );
    }
}
