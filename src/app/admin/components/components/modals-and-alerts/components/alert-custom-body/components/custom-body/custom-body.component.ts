import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {
  ADDAPPTABLE_ALERT_DATA,
  AddapptableDialogAlertComponent
} from '@addapptables/alert';
import { AlertModel } from '@addapptables/alert';

@Component({
  selector: 'app-custom-body',
  templateUrl: './custom-body.component.html',
  styleUrls: ['./custom-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomBodyComponent {

  constructor(public dialogRef: MatDialogRef<AddapptableDialogAlertComponent>,
    @Inject(ADDAPPTABLE_ALERT_DATA) public data: AlertModel) {
    console.log(data);
  }

}
