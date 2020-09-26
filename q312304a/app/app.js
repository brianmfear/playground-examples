import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
	rowCount = 1;
	columnCount = 1;
	columns = [{ name: 'field1' }];
	data = [{ id: 1, field1: 'Data 1' }];
	setValue(event) {
		this[event.target.name] = parseInt(event.target.value);
		this.columns = [...Array(this.columnCount).keys()].map((field) => ({
			fieldName: `field${field}`,
			label: `Field ${field}`,
		}));
		this.data = [...Array(this.rowCount).keys()].map((id) =>
			[...Array(this.columns)].reduce((p, v) => ((p[`field${v}`] = `Data ${v}`), p), { id })
		);
	}
}
