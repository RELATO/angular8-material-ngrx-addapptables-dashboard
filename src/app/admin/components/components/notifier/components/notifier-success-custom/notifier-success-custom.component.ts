import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotifierService, NotifierType } from '@addapptables/notifier';
import { NotifierCustomComponent } from '../notifier-custom/notifier-custom.component';
import { CustomNotifierModel } from '../../models/custom-notifier.model';

@Component({
  selector: 'app-notifier-success-custom',
  templateUrl: './notifier-success-custom.component.html',
  styleUrls: ['./notifier-success-custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifierSuccessCustomComponent {

  constructor(private notifierService: NotifierService) { }

  openNotifier() {
    // open notifier success with custom component
    this.notifierService.open({
      type: NotifierType.success,
      message: 'Custom notifier success',
      templateOrComponent: NotifierCustomComponent,
      data: <CustomNotifierModel>{
        icon: 'done'
      }
    });
  }

}
