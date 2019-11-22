import { Component, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ProductDataSourceServiceService } from '../../services/product-data-source-service.service';
import { MatPaginator } from '@angular/material';
import { ProductModel } from '../../models/product.model';
import { ProductFormModalComponent } from '../product-form-modal/product-form-modal.component';
import { AlertService } from '@addapptables/alert';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ModalService } from '@addapptables/modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {

  _unsubcribeAll = new Subject<any>();

  dataSource: ProductDataSourceServiceService;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    productDataSourceServiceService: ProductDataSourceServiceService,
    private _modalService: ModalService,
    private _alertService: AlertService
  ) {
    this.dataSource = productDataSourceServiceService;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.loadData();
  }

  createProduct() {
    this._modalService.show(ProductFormModalComponent);
  }

  editProduct(product: ProductModel) {
    this._modalService.show(ProductFormModalComponent, product);
  }

  deleteProduct(product: ProductModel) {
    const dialog = this._alertService.showConfirmation('Confirmation', `Are you sure delete product ${product.name}?`);
    dialog.beforeClose()
      .pipe(
        takeUntil(this._unsubcribeAll)
      )
      .subscribe((decision) => {
        if (decision && decision.result === 'ok') {
          this._alertService.showSuccess('Success', 'Deleted successfully');
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubcribeAll.next();
    this._unsubcribeAll.complete();
  }
}
