import { createSelector } from '@ngrx/store';
import { CalendarStoreModel } from '../models/calendar-store.model';

export const selectCalendarState = state => <CalendarStoreModel>state.calendar.events;

// selector for all events
export const selectAllEvents = createSelector(
    selectCalendarState,
    calendar => calendar.events
);
