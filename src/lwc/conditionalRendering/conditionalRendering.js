/**
 * Created by justi on 6/28/2023.
 */

import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['waterville', 'augusta', 'whitefield', 'asshat']

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}