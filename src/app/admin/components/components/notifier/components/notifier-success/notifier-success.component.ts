import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotifierService, NotifierType } from '@addapptables/notifier';

@Component({
  selector: 'app-notifier-success',
  templateUrl: './notifier-success.component.html',
  styleUrls: ['./notifier-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifierSuccessComponent {

  constructor(private notifierService: NotifierService) { }

  openNotifier() {
    // open notifier success
    this.notifierService.open({
      type: NotifierType.success,
      message: 'Notifier success'
    });
  }

}
