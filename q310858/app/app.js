import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track
    previewBody;

    preview = { label: 'Demo', label1: 'Demo 1', label2: 'Demo 2' }
     getPreview(event) {
        if(event.target.value == "BACKUP") {
            this.previewBody = this.preview.label2;
        } else {
           this.previewBody = this.preview.label1;
        }
    }
}
