import { LightningElement, track, api } from "lwc";

export default class App extends LightningElement {
  selectedLabel = "";
  items = [
    { label: "Item 1", name: "item1 label" },
    { label: "Item 2", name: "item2" },
    {
      label: "Item 3",
      name: "item3",
      items: [
        {
          label: "Item 4",
          name: "item4",
          items: [
            {
              label: "Item 5",
              name: "item5",
            },
          ],
        },
      ],
    },
  ];
  find(event) {
    const findNode = (nodeList, name) =>
      nodeList.find((node) => node.name === name) ||
      nodeList.reduce(
        (p, v) => p || (v.items && findNode(v.items, name)),
        null
      );
    this.selectedLabel = findNode(this.items, event.detail.name).label;
  }
}
