import { NgModule } from '@angular/core';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EffectsModule } from '@ngrx/effects';
import { CalendarEffect } from './effects/calendar.effects';
import { CalendarStore } from './stores/calendar.store';
import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';

@NgModule({
  imports: [
    SharedModule,
    CalendarRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ReduxRegisterModule.forFeature('calendar', { events: CalendarStore }),
    EffectsModule.forFeature([CalendarEffect]),
  ],
  declarations: [CalendarComponent]
})
export class CalendarModule { }
