import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
   @track screen = '1';

   get showScreen1() {
       return this.screen === '1';
   }

   get showScreen2() {
       return this.screen === '2';
   }

   handleOnScreenNext() {
       this.screen = '2';
   }

   handleOnSreen2Back() {
       this.screen = '1';
   }
}
