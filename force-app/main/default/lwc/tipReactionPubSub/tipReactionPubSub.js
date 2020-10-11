import { LightningElement, wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class TipReactionPubSub extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    tipRate = 0.0;
    reaction = 'Waiting for tip...';

    connectedCallback() {
        // subscribe to tipEvent
        registerListener('tipEvent', this.handlePubSub, this);
    }

    disconnectedCallback() {
        // unsubscribe from tipEvent
        unregisterAllListeners(this);
    }

    handlePubSub(message) {
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