import { NgModule } from '@angular/core';
import { TimeLimeRoutingModule } from './time-lime-routing.module';
import { TimeLimeComponent } from './time-lime.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { CardModule } from '@addapptables/card';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    TimeLimeRoutingModule,
    MglTimelineModule,
    CardModule,
    MatIconModule
  ],
  declarations: [TimeLimeComponent]
})
export class TimeLimeModule { }
