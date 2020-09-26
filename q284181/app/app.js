import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track scrolled = 0;

    @track showTopButton = false;

    onScroll(event) {
        this.scrolled = event.target.scrollTop
        if (event.target.scrollTop > 30) {
            this.showTopButton = true;
        } else {
            this.showTopButton = false;
        }

    }

    goToTop() {
        console.log('top');

          this.template.querySelector('.test').scrollTop=0;



    }
}
