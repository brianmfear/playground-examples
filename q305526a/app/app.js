import { LightningElement } from "lwc";

export default class App extends LightningElement {
  data = [
    { name: "Demo 1", id: "1" },
    { name: "Demo 2", id: "2" },
  ];
  columns = [
    { label: "Name", fieldName: "name" },
    {
      type: "button",
      typeAttributes: { label: 'View', name: 'view' }
    },
  ];
  handleRowAction(event) {
      console.log(event.detail.action.name);
      console.log(event.detail.row.id);
  }
}
