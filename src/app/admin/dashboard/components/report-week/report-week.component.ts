import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { AddapptableState } from '../../../../reducers';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BarVerticalComponent } from '@swimlane/ngx-charts';
import { LoadReportWeeks } from './actions/report-week.actions';
import { ReportkWeekModel } from './models/report-week.model';
import { selectAllReportWeek } from './selectors/report-week.selector';
import { selectAllScreen } from '@addapptables/responsive';
import { selectActiveMenuMini } from '@addapptables/menu';

@Component({
  selector: 'app-report-week',
  templateUrl: './report-week.component.html',
  styleUrls: ['./report-week.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportWeekComponent implements OnInit, OnDestroy {

  reportData$: Observable<ReportkWeekModel[]>;

  barPadding = 8;

  colorScheme = {
    domain: ['#e09d3d', '#20a9d2', '#33877d', '#d43934', '#999999']
  };
  sub: Array<Subscription> = [];

  @ViewChild(BarVerticalComponent, { static: true })
  chart: BarVerticalComponent;

  constructor(private readonly _store: Store<AddapptableState>) {
    _store.dispatch(new LoadReportWeeks());
  }

  ngOnInit(): void {
    this.reportData$ = this._store.pipe(
      select(selectAllReportWeek)
    );
    this.initResponsive();
    this.listenerOnMenuChanged();
  }

  private initResponsive() {
    const screen$ = this._store.pipe(
      select(selectAllScreen),
      tap(x => {
        x.lg && (this.barPadding = 50);
        x.md && (this.barPadding = 30);
        x.sm && (this.barPadding = 20);
        x.xs && (this.barPadding = 8);
      })
    );
    this.sub.push(screen$.subscribe());
  }

  private listenerOnMenuChanged() {
    const menuMini$ = this._store.pipe(
      select(
        selectActiveMenuMini
      ),
      tap(() => {
        setTimeout(() => {
          this.chart && this.chart.update();
        }, 100);
      })
    );
    this.sub.push(menuMini$.subscribe());
  }

  ngOnDestroy(): void {
    this.sub.forEach(x => x.unsubscribe());
  }
}
