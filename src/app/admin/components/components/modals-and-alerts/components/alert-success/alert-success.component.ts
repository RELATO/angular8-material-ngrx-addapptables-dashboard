import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AlertService } from '@addapptables/alert';

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertSuccessComponent {

  /**
  * constructor
  */
  constructor(private _alertService: AlertService) { }

  // open dialog success
  openDialog(): void {
    this._alertService.showSuccess('Success', 'Saved successfully');
  }

}
