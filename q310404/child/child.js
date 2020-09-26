import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api cartItems;
    @api cartItem;
    displayRow = true;

    handleRemove(event) {
        var array = [...this.cartItems];
        var key = event.target.value;
        console.log('key -> ' + key);
        var index = array.findIndex(function(item, i) {
            console.log('item -> ' + item);
            return item === key
        });

        console.log('index -> ' + index);

        array.splice(index, 1);
        this.cartItems = array;
        
        const selectedEvent = new CustomEvent("cartitemremove", {
            detail: this.cartItems
        });

        this.dispatchEvent(selectedEvent);
        this.displayRow = false;
    }
}
