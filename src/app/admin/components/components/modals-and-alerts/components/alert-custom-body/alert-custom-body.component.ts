import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomBodyComponent } from './components/custom-body/custom-body.component';
import { Subscription } from 'rxjs';
import {
  AddapptableDialogAlertComponent
} from '@addapptables/alert';
import { AlertModel } from '@addapptables/alert';

@Component({
  selector: 'app-alert-custom-body',
  templateUrl: './alert-custom-body.component.html',
  styleUrls: ['./alert-custom-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertCustomBodyComponent implements OnDestroy {

  dialogSub: Subscription;

  /**
   * CONSTRUCTOR
   */
  constructor(public dialog: MatDialog) { }

  // open dialog custom body
  openDialog() {
    const dialog = this.dialog.open(AddapptableDialogAlertComponent, {
      width: '478px',
      data: <AlertModel>{
        title: 'Custom',
        text: 'Custom body',
        customBody: CustomBodyComponent,
        customData: <any>{
          text: 'write anything'
        }
      }
    });
    this._destroySub();
    this.dialogSub = dialog.afterClosed().subscribe((result) => {
      if (!result) { return; }
      console.log(result.data.customData);
    });
  }

  // destroy all subscriptions
  ngOnDestroy(): void {
    this._destroySub();
  }

  private _destroySub() {
    this.dialogSub && this.dialogSub.unsubscribe();
  }

}
