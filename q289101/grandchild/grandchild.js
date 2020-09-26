import { LightningElement } from 'lwc';

export default class Grandchild extends LightningElement {

dispatch(event)
{
    this.dispatchEvent(new CustomEvent('createrecord',{bubbles: true, composed: true}));
}
}