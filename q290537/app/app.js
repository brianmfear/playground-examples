import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track content;
    @track error;
    readFile(event) {
        let reader = new FileReader();
        reader.onload = this.showContent.bind(this, reader);
        reader.onerror = this.showError.bind(this, reader);
        reader.readAsText(event.target.files[0]);
    }
    showError(reader) {
        this.content = '';
        this.error = 'An error happened!';
    }
    showContent(reader) {
        this.error = '';
        this.content = reader.result;
        
    }
}
