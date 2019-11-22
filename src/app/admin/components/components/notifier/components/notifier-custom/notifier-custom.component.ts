import { Component, Inject } from '@angular/core';
import { ADDAPPTABLE_NOTIFIER_DATA, Notifier } from '@addapptables/notifier';

@Component({
  selector: 'app-notifier-custom',
  templateUrl: './notifier-custom.component.html',
  styleUrls: ['./notifier-custom.component.scss']
})
export class NotifierCustomComponent {

  /**
   * constructor
   */
  constructor(@Inject(ADDAPPTABLE_NOTIFIER_DATA) public notifier: Notifier) {
    console.log(notifier);
  }

}
