import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  AlertService
} from '@addapptables/alert';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertErrorComponent {

  /**
   * constructor
   */
  constructor(private _alertService: AlertService) { }

  // opend dialog error
  openDialog() {
    this._alertService.showError('Error', 'Error');
  }

}
