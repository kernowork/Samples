import { LightningElement, wire} from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import TIPMC from '@salesforce/messageChannel/Tip__c';

export default class TipCalculator extends LightningElement {
    tipRate = 0.0;
    customValue = false;
    amount = 0.0;
    tipAmount = 0.0;
    totalAmount = 0.0;
    numParty = 1;
    eachAmount = 0.0;

    @wire(MessageContext)
    messageContext;

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
        this.handleMessage();
    }

    handleCustomClick(event) {
        this.customValue = true;
    }

    handleCustomTip(event) {
        this.tipRate = event.target.value;
        this.computeAmounts();
        this.handleMessage();
    }

    handleMessage() {
        const message = {
            amount: this.amount,
            tipRate: this.tipRate};
        publish(this.messageContext, TIPMC, message);
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
        this.handleMessage();
    }

}