import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

@track number1=0;
@track number2=0;
@track number3=0;

handleInputChange(event) {
  this[event.target.name] = parseFloat(event.target.value);
}

doSum(){
    const sum = parseInt(this.number1) + parseInt(this.number2);
    console.log(this.number1);
    console.log(this.number2);
    this.number3 = sum;    
}
doSubsc(){
    const subsc = parseInt(this.number1) - parseInt(this.number2);
    console.log("sub" + this.number1);
    console.log("sub" + this.number2);
    this.number3 = subsc;
}

doDiv(){
    const divOut = parseInt(this.number1) / parseInt(this.number2);
    this.number3 = divOut;
}

doMulti(){
    const multiPli = parseInt(this.number1) * parseInt(this.number2);
    this.number3 = multiPli;
}
}

