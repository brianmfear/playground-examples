import { LightningElement, api } from 'lwc';

export default class TestContainer extends LightningElement {
    @api cartItems = [];

    handleCartItemChange(event) {
        this.cartItems = event.detail;
    }
}