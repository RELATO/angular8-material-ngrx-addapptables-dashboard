import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductModel } from '../../models/product.model';
import { UtilValidation } from 'src/app/shared/utils/util-validation';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from '@addapptables/alert';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {

  maxLengthLargeSize = 100;

  maxLengthSmallSize = 50;

  formGroup: FormGroup;

  savingSubject = new BehaviorSubject<boolean>(false);

  saving$ = this.savingSubject.asObservable();

  @Input()
  productDto: ProductModel;

  @Output()
  save = new EventEmitter();

  constructor(private _fb: FormBuilder, private _alertService: AlertService) { }

  ngOnInit() {
    if (!this.productDto) { this.productDto = <ProductModel>{}; }
    this.formGroup = this._fb.group({
      id: [this.productDto.id, [UtilValidation.required]],
      name: [this.productDto.name, [UtilValidation.required, Validators.maxLength(this.maxLengthLargeSize)]],
      category: [this.productDto.category, [UtilValidation.required, Validators.maxLength(this.maxLengthSmallSize)]],
      price: [this.productDto.price, [UtilValidation.required]],
      quantity: [this.productDto.quantity, [UtilValidation.required]],
      active: [this.productDto.active]
    });
  }

  submit() {
    if (this.formGroup.invalid) { return; }
    this.savingSubject.next(true);
    if (!this.productDto.id) {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    setTimeout(() => {
      this.savingSubject.next(false);
      this.save.emit();
      this._alertService.showSuccess('Saved', 'Saved successfully');
    }, 500);
  }

  update() {
    setTimeout(() => {
      this.savingSubject.next(false);
      this.save.emit();
      this._alertService.showSuccess('Saved', 'Saved successfully');
    }, 500);
  }

}
