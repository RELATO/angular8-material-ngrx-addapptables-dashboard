import { CalendarEvent } from 'angular-calendar';

export interface CalendarStoreModel {
    loading: boolean;
    events: CalendarEvent[];
}
