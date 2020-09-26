import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track items = [];
    connectedCallback() {
        this.items = [];
        let i = 0;
        while(++i < 20) {
            this.items.push( {id:i, name:"Row "+i, desc: "Example Row "+i} );
        }
    }
    handleScroll(event) {
        let area = this.template.querySelector('.scrollArea');
        let threshold = 2 * event.target.clientHeight;
        let areaHeight = area.clientHeight;
        let scrollTop = event.target.scrollTop;
        if(areaHeight - threshold < scrollTop) {
            let i = 0, t = this.items.length;
            while(++i < 14) {
                this.items.push( {id:i+t, name:"Row "+(i+t), desc: "Example Row "+(i+t)} );
            }
        }
    }
}
