import { Component } from '@angular/core';
import { NotifierService, NotifierType } from '@addapptables/notifier';
import { NotifierCustomComponent } from '../notifier-custom/notifier-custom.component';
import { CustomNotifierModel } from '../../models/custom-notifier.model';

@Component({
  selector: 'app-notifier-info-custom',
  templateUrl: './notifier-info-custom.component.html',
  styleUrls: ['./notifier-info-custom.component.scss']
})
export class NotifierInfoCustomComponent {

  constructor(private notifierService: NotifierService) { }

  openNotifier() {
    // open notifier info with custom component
    this.notifierService.open({
      type: NotifierType.info,
      message: 'Custom notifier info',
      templateOrComponent: NotifierCustomComponent,
      data: <CustomNotifierModel>{
        icon: 'info'
      }
    });
  }

}
