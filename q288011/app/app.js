import { LightningElement, track } from 'lwc';

const dataTableColumns = [
    {
        label: "User", fieldName: "userName", value: "userName", sortable: true, default: true, mobileDefault: true,
        locked: false
    },
    {
        label: "Team", fieldName: "teamLine", value: "teamLine", sortable: true, default: true, mobileDefault: false,
        locked: false
    },
    {
        label: "BU",
        fieldName: "practiceLine",
        value: "practiceLine",
        sortable: true,
        default: true,
        mobileDefault: false,
        locked: false
    },
    {label: "Country", fieldName: "country", value: "country", sortable: true, default: true, mobileDefault: false},
    {
        label: "Office",
        fieldName: "officeLine",
        value: "officeLine",
        sortable: true,
        default: true,
        mobileDefault: false,
        locked: false
    },
    {
        label: "Contract Type",
        fieldName: "contractType",
        value: "contractType",
        sortable: true,
        default: true,
        mobileDefault: false,
        locked: false
    },
    {
        label: "Activity Full Name",
        fieldName: "activityFullName",
        value: "activityFullName",
        sortable: true,
        default: true, mobileDefault: true,
        locked: false
    },
    {label: "Type", fieldName: "typeTock", value: "typeTock", sortable: true, default: true, mobileDefault: true},
    {
        label: "Length",
        fieldName: "length",
        type: "number",
        value: "length",
        sortable: true,
        default: true,
        mobileDefault: true,
        locked: true
    },
    {
        label: "Unit", fieldName: "unit", value: "unit", sortable: true, default: true, mobileDefault: false,
        locked: false
    }
];

export default class App extends LightningElement {
    @track
    dataTableColumns = dataTableColumns;

        handleSort(event) {
        let fieldName = event.detail.fieldName;
        let sortDirection = event.detail.sortDirection;
        this.sortOrder = fieldName;
        this.sortDirection = sortDirection;

        
    }
}
