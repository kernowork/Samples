import { LightningElement, track} from 'lwc';

export default class TipCalculator extends LightningElement {
    tipRate = 0.0;
    customValue = false;
    amount = 0.0;
    tipAmount = 0.0;
    totalAmount = 0.0;
    numParty = 1;
    eachAmount = 0.0;

    handleAmount(event) {
        this.amount = event.target.value;
        this.computeAmounts();
    }

    handleNumParty(event) {
        this.numParty = event.target.value;
        this.computeAmounts();
    }

    handleClick(event) {
        this.customValue = false;
        this.tipRate= event.target.value;
        this.computeAmounts();
    }

    handleCustomClick(event) {
        this.customValue = true;
    }

    handleCustomTip(event) {
        this.tipRate = event.target.value;
        this.computeAmounts();
    }

    computeAmounts() {
        //this.amount is actually a string type!
        this.tipAmount = this.amount * this.tipRate;
        this.totalAmount = this.amount * 1.0 + this.tipAmount;
        this.eachAmount = this.totalAmount / this.numParty;
    }

    handleReset() {
        this.tipRate = 0.0;
        this.customValue = false;
        this.amount = 0.0;
        this.tipAmount = 0.0;
        this.totalAmount = 0.0;
        this.numParty = 1;
        this.eachAmount = 0.0;
    }

}