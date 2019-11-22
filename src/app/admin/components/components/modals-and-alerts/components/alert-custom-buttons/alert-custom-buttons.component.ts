import { Component, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {
  AddapptableDialogAlertComponent
} from '@addapptables/alert';
import { AlertModel } from '@addapptables/alert';
import { AlertEnum } from '@addapptables/alert';


@Component({
  selector: 'app-alert-custom-buttons',
  templateUrl: './alert-custom-buttons.component.html',
  styleUrls: ['./alert-custom-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertCustomButtonsComponent {

  // refence template buttons
  @ViewChild(TemplateRef, { static: true })
  templateButtons: TemplateRef<any>;

  dialogRef: MatDialogRef<AddapptableDialogAlertComponent>;

  /**
   * CONSTRUCTOR
   */
  constructor(public dialog: MatDialog) { }

  // open dialog custom buttons
  openDialog() {
    this.dialogRef = this.dialog.open(AddapptableDialogAlertComponent, {
      width: '478px',
      data: <AlertModel>{
        type: AlertEnum.warning,
        title: 'Confirmation',
        text: 'Are you sure delete alert?',
        customButtonComponent: this.templateButtons
      }
    });
  }

  // close dialog
  closeModal(action: string) {
    console.log(action);
    this.dialogRef.close();
  }

}
