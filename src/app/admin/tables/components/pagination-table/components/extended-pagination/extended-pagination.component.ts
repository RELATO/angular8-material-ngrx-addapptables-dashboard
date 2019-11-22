import { Component, OnInit, ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddapptableState } from 'src/app/reducers';
import { Subscription } from 'rxjs';
import { ExtendedPaginationModel } from './models/extended-pagination.model';
import { selectAllData } from './selectors/extended-pagination';
import { LoadExtendedPaginations } from './actions/extended-pagination.actions';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-extended-pagination',
  templateUrl: './extended-pagination.component.html',
  styleUrls: ['./extended-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendedPaginationComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = new MatTableDataSource<ExtendedPaginationModel>([]);

  subscription: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _store: Store<AddapptableState>) {
    _store.dispatch(new LoadExtendedPaginations());
  }

  ngOnInit() {
    const dataSource$ = this._store.pipe(
      select(selectAllData)
    );
    this.subscription = dataSource$.subscribe(x => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

}
