import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {
    @api cartItems;

    handleRemove(event) {
        this.cartItems = event.detail;

        const selectedEvent = new CustomEvent("cartitemremove", {
            detail: this.cartItems
        });

        this.dispatchEvent(selectedEvent);
    }
}
