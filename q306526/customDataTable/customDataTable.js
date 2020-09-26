import LightningDatatable from 'lightning/datatable';
//import the template so that it can be reused
import DatatablePicklistTemplate from './picklist-template.html';
import { loadStyle } from 'lightning/platformResourceLoader';
import CustomDataTableResource from '@salesforce/resourceUrl/CustomDataTable';

export default class CustomDataTable extends LightningDatatable {
    static customTypes = {
        picklist: {
            template: DatatablePicklistTemplate,
            typeAttributes: ['label', 'placeholder', 'options', 'value', 'context'],
        },

    };

    renderedCallback() {
        Promise.all([
            loadStyle(this, CustomDataTableResource),
        ]).then(() => { })
    }
}