import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotifierService, NotifierType } from '@addapptables/notifier';

@Component({
  selector: 'app-notifier-warning',
  templateUrl: './notifier-warning.component.html',
  styleUrls: ['./notifier-warning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifierWarningComponent {

  constructor(private notifierService: NotifierService) { }

  openNotifier() {
    // open notifier warning
    this.notifierService.open({
      type: NotifierType.warning,
      message: 'Notifier warning'
    });
  }

}
