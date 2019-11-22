import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewEncapsulation } from '@angular/core';
import { startOfDay, isSameMonth, isSameDay } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarMonthViewDay, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Store, select } from '@ngrx/store';
import { AddapptableState } from 'src/app/reducers';
import { Observable, Subject, Subscription } from 'rxjs';
import { selectAllEvents } from './selectors/calendar.selector';
import { map } from 'rxjs/operators';
import { LoadCalendarEvents } from './actions/calendar-events.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit, OnDestroy {

  events$: Observable<CalendarEvent[]>;

  selectedDay: any;
  view: string;
  viewDate: Date;
  activeDayIsOpen: boolean;
  actions: CalendarEventAction[];
  refresh: Subject<any> = new Subject();
  locale: string;

  subLocale: Subscription;

  constructor(private _store: Store<AddapptableState>,
    private readonly _translateService: TranslateService) {
    _store.dispatch(new LoadCalendarEvents());
    this._initCalendar();
  }

  private _initCalendar() {
    // Set the defaults
    this.view = 'month';
    this.viewDate = new Date();
    this.activeDayIsOpen = true;
    this.selectedDay = { date: startOfDay(new Date()) };

    // actions edit and delete
    this.actions = [
      {
        label: '<i class="material-icons s-16">edit</i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.editEvent('edit', event);
        }
      },
      {
        label: '<i class="material-icons s-16">delete</i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.deleteEvent(event);
        }
      }
    ];
  }


  /**
   * On init
   */
  ngOnInit() {
    /**
    * Get events from service/server
    */
    this.events$ = this._store.pipe(
      select(selectAllEvents),
      map(event => event.map(x => ({ ...x, actions: this.actions })))
    );

    // set current lang selected
    this.locale = this._translateService.currentLang;

    // subscribe onchange language
    this.subLocale = this._translateService.onLangChange.subscribe((result) => {
      this.locale = result.lang;
    });
  }

  /**
   * editEvent
   */
  editEvent(action: string, event: any): any {
    console.log(action, event);
  }

  /**
  * deleteEvent
  */
  deleteEvent(event: any): any {
    console.log(event);
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next(true);
  }

  /**
  * Day clicked
  */
  dayClicked(day: CalendarMonthViewDay): void {
    const date: Date = day.date;
    const events: CalendarEvent[] = day.events;
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
    this.selectedDay = day;
    this.refresh.next();
  }

  ngOnDestroy(): void {
    this.subLocale && this.subLocale.unsubscribe();
  }
}
