import { LightningElement, track, api } from 'lwc'; 
export default class Input extends LightningElement {
    @track _field;

    @api
    get field() {
        return this._field;
    }

    set field(val) {
        this._field = {...val};
    }

    get id() {
        return this._field.id;
    }

    get value() {
        return this._field.value;
    }

    handleValueChange(evt) {
        this._field.value = evt.target.value;
    }
}
