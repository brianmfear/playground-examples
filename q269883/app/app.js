import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    beforeUnloadHandler(ev) {
        console.log("beforeUnloadHandler called");
        return "";
    }
    connectedCallback() {
        window.addEventListener("beforeunload", this.beforeUnloadHandler);
        console.log("connectedCallback executed");
    }
    disconnectedCallback() {
        window.removeEventListener("beforeunload", this.beforeUnloadHandler);
        console.log("disconnectedCallback executed");
    }
}
