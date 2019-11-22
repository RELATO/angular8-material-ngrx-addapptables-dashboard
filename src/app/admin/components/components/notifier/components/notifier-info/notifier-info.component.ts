import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotifierService, NotifierType } from '@addapptables/notifier';

@Component({
  selector: 'app-notifier-info',
  templateUrl: './notifier-info.component.html',
  styleUrls: ['./notifier-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifierInfoComponent {

  constructor(private notifierService: NotifierService) { }

  openNotifier() {
    // open notifier info
    this.notifierService.open({
      type: NotifierType.info,
      message: 'Notifier info'
    });
  }

}
