import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import {
  AddapptableDialogAlertComponent, AlertService
} from '@addapptables/alert';

@Component({
  selector: 'app-alert-confirmation',
  templateUrl: './alert-confirmation.component.html',
  styleUrls: ['./alert-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertConfirmationComponent implements OnDestroy {

  modalSub: Subscription;

  /**
   * CONSTRUCTOR
   */
  constructor(private _alertService: AlertService) { }

  // open alert confirmation
  openDialog() {
    const dialog = this._alertService.showConfirmation('Confirmation', 'Are you sure delete alert?');
    this._subscribeModalClose(dialog);
  }

  // destroy subscriptions
  ngOnDestroy(): void {
    this._destroySub();
  }

  // subscribe to alert
  private _subscribeModalClose(dialog: MatDialogRef<AddapptableDialogAlertComponent>) {
    this._destroySub();
    this.modalSub = dialog.beforeClose().subscribe((result) => {
      // alert desicion
      if (!result) { return; }
      switch (result.result) {
        case 'ok':
          this._openDialogSuccess();
          break;
        case 'cancel':
          console.log('cancel');
          break;
      }
    });
  }

  // open dialog success
  private _openDialogSuccess() {
    this._alertService.showSuccess('Success', 'Deleted successfully');
  }

  // destroy all subscriptions
  private _destroySub() {
    this.modalSub && this.modalSub.unsubscribe();
  }
}
