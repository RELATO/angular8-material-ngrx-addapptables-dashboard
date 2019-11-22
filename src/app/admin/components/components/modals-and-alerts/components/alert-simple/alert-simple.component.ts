import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AlertService } from '@addapptables/alert';

@Component({
  selector: 'app-alert-simple',
  templateUrl: './alert-simple.component.html',
  styleUrls: ['./alert-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertSimpleComponent {

  /**
   * constructor
   */
  constructor(private _alertService: AlertService) { }

  // open dialog simple
  openDialog(): void {
    this._alertService.showSimple('Alert', 'Simple alert');
  }

}
