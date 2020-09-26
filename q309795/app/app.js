import { LightningElement } from "lwc";
export default class App extends LightningElement {
  data = [];
  columns = [
    {
      label: "Name",
      fieldName: "name",
    },
    {
      type: "button-icon",
      typeAttributes: { iconName: { fieldName: "iconName" } },
    },
  ];
  connectedCallback() {
    this.data = [...Array(10).keys()].map((value) => ({
      id: value,
      name: `Demo ${value}`,
      iconName: "utility:success",
    }));
  }
  onrowaction(event) {
    if (event.detail.row.iconName === "utility:error") {
      event.detail.row.iconName = "utility:success";
    } else {
      event.detail.row.iconName = "utility:error";
    }
    this.data = [...this.data];
  }
}
