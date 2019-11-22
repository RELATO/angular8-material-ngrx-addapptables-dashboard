import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofAction } from '@addapptables/ngrx-actions';
import { LoadCalendarEvents, CalendarEventsLoaded } from '../actions/calendar-events.actions';
import { switchMap, map } from 'rxjs/operators';
import { CalendarService } from '../services/calendar.service';


@Injectable()
export class CalendarEffect {

  /**
   * Constructor
   */
  constructor(private _actions$: Actions, private _calendarService: CalendarService) { }

  // load calendar events
  @Effect()
  $loadEvents = this._actions$.pipe(
    ofAction(LoadCalendarEvents),
    switchMap(() => this._calendarService.getAllEvents()),
    map(events => new CalendarEventsLoaded({ events }))
  );

}
