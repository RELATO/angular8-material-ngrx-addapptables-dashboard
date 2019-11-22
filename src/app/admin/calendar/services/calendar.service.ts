import { Injectable } from '@angular/core';
import { events } from './data';
import { of, Observable } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  getAllEvents(): Observable<CalendarEvent[]> {
    return of(events);
  }
}
