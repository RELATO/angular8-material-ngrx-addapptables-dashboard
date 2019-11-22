import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { AddapptableState } from 'src/app/reducers';
import { Observable, merge, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GithubIssue } from './models/table-pagination.model';
import { selectAllData, selectLoading, selectTotalCount, selectIsRateLimitReached } from './selectors/pagination-table.selector';
import { LoadDataTablePagination } from './actions/table.-pagination.actions';

@Component({
  selector: 'app-default-pagination',
  templateUrl: './default-pagination.component.html',
  styleUrls: ['./default-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultPaginationComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];

  data$: Observable<GithubIssue[]>;
  resultsLength$: Observable<number>;
  isLoadingResults$: Observable<boolean>;
  isRateLimitReached$: Observable<boolean>;

  allSubs: Subscription[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _store: Store<AddapptableState>) { }

  ngOnInit() {
    this._initObsevables();
    this._initTablePaginator();
  }

  private _initObsevables() {
    this.data$ = this._store.pipe(
      select(selectAllData)
    );
    this.isLoadingResults$ = this._store.pipe(
      select(selectLoading)
    );
    this.resultsLength$ = this._store.pipe(
      select(selectTotalCount)
    );
    this.isRateLimitReached$ = this._store.pipe(
      select(selectIsRateLimitReached)
    );
  }

  private _initTablePaginator() {
    this.allSubs.push(this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0));
    this.allSubs.push(merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        map(() => {
          this._store.dispatch(new LoadDataTablePagination({
            sort: this.sort.active,
            order: this.sort.direction,
            page: this.paginator.pageIndex
          }));
        })
      ).subscribe());
  }

  ngOnDestroy(): void {
    this.allSubs.forEach(x => x.unsubscribe());
  }
}
