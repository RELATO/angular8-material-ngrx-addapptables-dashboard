import { CalendarEvent } from 'angular-calendar';
import { subDays, addDays, startOfDay, endOfMonth, addHours } from 'date-fns';

export const events: CalendarEvent[] = [
    {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        allDay: true,
        resizable: {
            beforeStart: true,
            afterEnd: true
        },
        draggable: true
    },
    {
        start: startOfDay(new Date()),
        title: 'An event with no end date',
    },
    {
        start: subDays(endOfMonth(new Date()), 3),
        end: addDays(endOfMonth(new Date()), 3),
        title: 'A long event that spans 2 months',
        allDay: true
    },
    {
        start: addHours(startOfDay(new Date()), 2),
        end: new Date(),
        title: 'A draggable and resizable event',
        resizable: {
            beforeStart: true,
            afterEnd: true
        },
        draggable: true
    }
];
