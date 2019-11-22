import { NgModule } from '@angular/core';
import { TypographyRoutingModule } from './typography-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypographyComponent } from './typography.component';
import { HeadingComponent } from './components/heading/heading.component';
import { CardModule } from '@addapptables/card';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    TypographyRoutingModule,
    CardModule,
    MatIconModule
  ],
  declarations: [TypographyComponent, HeadingComponent]
})
export class TypographyModule { }
