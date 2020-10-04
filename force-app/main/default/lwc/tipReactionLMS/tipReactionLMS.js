import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import TIPMC from '@salesforce/messageChannel/Tip__c';

export default class TipReaction extends LightningElement {
    @wire(MessageContext)
    messageContext;

    subscription = null;
    receivedMessage;
    tipRate = 0.0;

    reaction = 'Waiting for tip...';

    connectedCallback() {
        this.subscribeMC();
    }

    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(
            this.messageContext,
            TIPMC, (message) => {
                this.handleMessage(message);
            });
    }

    handleMessage(message) {
        if(message.amount > 0.0) {
            if(message.tipRate < 0.13) {
                this.reaction = 'Oh, you have got to be kidding me!';
            } else if(message.tipRate > 0.19) {
                this.reaction = 'Thank you so much!'
            } else {
                this.reaction = 'Surely you can do better than that...';
            }
        } else {
            this.reaction = 'Waiting for tip...';
        }
        
    }

}