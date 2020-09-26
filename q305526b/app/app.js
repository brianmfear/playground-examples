import { LightningElement } from "lwc";

export default class App extends LightningElement {
  data = [
    { name: "Demo 1", id: "1" },
    { name: "Demo 2", id: "2" },
  ];
  columns = [
    { label: "Name", fieldName: "name" },
    {
      type: "action",
      typeAttributes: { rowActions: [{ name: "demo", label: "Demo" }] }
    },
  ];
  handleRowAction(event) {
      console.log(event.detail.row);
  }
}
