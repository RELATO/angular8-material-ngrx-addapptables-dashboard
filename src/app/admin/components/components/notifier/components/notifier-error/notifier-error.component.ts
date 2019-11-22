import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotifierService, NotifierType } from '@addapptables/notifier';

@Component({
  selector: 'app-notifier-error',
  templateUrl: './notifier-error.component.html',
  styleUrls: ['./notifier-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifierErrorComponent {

  constructor(private notifierService: NotifierService) { }

  openNotifier() {
    // open notifier danger
    this.notifierService.open({
      type: NotifierType.danger,
      message: 'Notifier error'
    });
  }

}
