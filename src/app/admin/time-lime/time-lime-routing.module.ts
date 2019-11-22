import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeLimeComponent } from './time-lime.component';

const routes: Routes = [{
  path: '',
  component: TimeLimeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeLimeRoutingModule { }
