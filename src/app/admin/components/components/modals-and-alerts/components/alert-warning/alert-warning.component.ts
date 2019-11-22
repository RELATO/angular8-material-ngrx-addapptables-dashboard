import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  AlertService
} from '@addapptables/alert';

@Component({
  selector: 'app-alert-warning',
  templateUrl: './alert-warning.component.html',
  styleUrls: ['./alert-warning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertWarningComponent {

  constructor(private _alertService: AlertService) { }

  // opend dialog warning
  openDialog() {
    this._alertService.showWarning('Warn', 'Warning');
  }

}
