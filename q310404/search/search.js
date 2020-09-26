import { LightningElement, track, api } from 'lwc';

export default class Search extends LightningElement {
    products = [1, 2, 3];
    error;
    value = '';
    @api cartItems = [];

    tableColumns = [{
        label: 'Product Code',
        fieldName: 'ProductCode',
        type: 'text',
        sortable: true
    },
    {
        label: 'Product Name',
        fieldName: 'Name',
        type: 'text',
        sortable: 'true'
    },
    {
        label: 'Add to Cart',
        type: 'button-icon',
        
        typeAttributes: 
        {
            iconName: 'utility:add',
            name: 'addToCart',
            title: 'addToCart',
            disabled: false,
            alternativeText: 'Add to Cart'
        }
    }];

    handleKeyChange(event) {
        this.searchKey = event.target.value;
    }

    addToCart(event) {
        const row = event.detail.row;
        this.cartItems = [...this.cartItems, row];
    
        const selectedEvent = new CustomEvent("cartitemadd", {
            detail: this.cartItems
        });

        let str2 = JSON.stringify(this.cartItems, null, 4);
        console.log('cartItems on add -> ' + str2);

        this.dispatchEvent(selectedEvent);
    }
}