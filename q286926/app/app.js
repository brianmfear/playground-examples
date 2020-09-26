import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track showSpinner = false;
    spin() {
        this.showSpinner = true;
        new Promise((resolve,reject)=> {
            setTimeout(() => {
                let start = new Date();
                let y = 0;
                while(new Date()-start<9000) {
                    y = y + 1;
                }
                resolve(y);
            }, 9000);
        }).then(
            ()=>this.showSpinner = false
        );
    }
}
