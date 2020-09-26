import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
  @api languageSelection = [];

  get languageOptions() {
    console.log(`languageOptions called`);
    //values are OHT api code
    return [
      { label: "Russian", value: "ru-ru" },
      { label: "Serbian", value: "sr-rs" },
      { label: "Albanian", value: "sq-al" },
      { label: "Indonesian", value: "id-id" },
      { label: "Ukrainian", value: "uk-ua" },
      { label: "Macedonian", value: "mk-mk" },
      { label: "French", value: "fr-fr" },
      { label: "Spanish", value: "es-es" }
    ];
  }

  //adds the event value to the language slection array.
  handleLanguageChange(event) {
    this.languageSelection = event.detail.value;
    console.log(this.languageSelection);
  }
}
