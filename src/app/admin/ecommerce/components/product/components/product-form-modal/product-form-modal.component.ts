import { Component, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-form-modal',
  templateUrl: './product-form-modal.component.html',
  styleUrls: ['./product-form-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormModalComponent {

  constructor(
    private _dialogRef: MatDialogRef<ProductFormModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public productDto: ProductModel
  ) { }

  close() {
    this._dialogRef.close();
  }

}
