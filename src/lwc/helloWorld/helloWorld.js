/**
 * Created by justi on 6/28/2023.
 */

import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   @track dynamicGreeting = 'world';

   greetingChangeHandler(event){
       this.dynamicGreeting = event.target.value;
   }

}