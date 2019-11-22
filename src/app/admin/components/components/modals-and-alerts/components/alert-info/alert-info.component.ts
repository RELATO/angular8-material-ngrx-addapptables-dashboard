import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  AlertService
} from '@addapptables/alert';

@Component({
  selector: 'app-alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertInfoComponent {

  /**
   * constructor
   */
  constructor(private _alertService: AlertService) { }

  // open dialog info
  openDialog() {
    this._alertService.showInfo('Info', 'Information');
  }

}
