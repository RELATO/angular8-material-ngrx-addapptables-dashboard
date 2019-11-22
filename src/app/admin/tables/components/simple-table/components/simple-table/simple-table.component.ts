import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SimpleTableModel } from '../../models/simple-table.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AddapptableState } from 'src/app/reducers';
import { selectAllData } from '../../selectors/simple-table.selector';
import { LoadDataSimpleTable } from '../../actions/simple-table.actions';

@Component({
  selector: 'app-simple-table-content',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTableContentComponent implements OnInit {

  @Input()
  classTable: string;

  dataSource$: Observable<SimpleTableModel[]>;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private _store: Store<AddapptableState>) {
    _store.dispatch(new LoadDataSimpleTable());
  }

  ngOnInit() {
    this.dataSource$ = this._store.pipe(
      select(selectAllData)
    );
  }
}
