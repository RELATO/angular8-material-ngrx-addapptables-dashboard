import { Store, Action } from '@addapptables/ngrx-actions';
import { CalendarStoreModel } from '../models/calendar-store.model';
import { LoadCalendarEvents, CalendarEventsLoaded } from '../actions/calendar-events.actions';

@Store<CalendarStoreModel>({
    loading: false,
    events: []
})
export class CalendarStore {

    // call action to load the events
    @Action(LoadCalendarEvents)
    loadCalendarEvents(state: CalendarStoreModel) {
        return { ...state, loading: true };
    }

    // action is called when events was loaded
    @Action(CalendarEventsLoaded)
    calendarEventsLoaded(state: CalendarStoreModel, { payload: { events } }: CalendarEventsLoaded) {
        return { ...state, loading: true, events };
    }

}
