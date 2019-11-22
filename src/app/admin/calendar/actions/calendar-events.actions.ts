import { Action } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';

// actions
export enum CalendarEventsActionTypes {
  LoadCalendarEvents = '[CalendarEvents] Load CalendarEvents',
  CalendarEventsLoaded = '[CalendarEvents] CalendarEvents Loaded'
}

export class LoadCalendarEvents implements Action {
  readonly type = CalendarEventsActionTypes.LoadCalendarEvents;
}

export class CalendarEventsLoaded implements Action {
  readonly type = CalendarEventsActionTypes.CalendarEventsLoaded;
  constructor(public payload: { events: CalendarEvent[] }) { }
}

export type CalendarEventsActions = LoadCalendarEvents | CalendarEventsLoaded;
