import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalsAndAlertsComponent } from './components/modals-and-alerts/modals-and-alerts.component';
import { NotifierComponent } from './components/notifier/notifier.component';
import { PanelsComponent } from './components/panels/panels.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [
    {
      path: 'buttons',
      component: ButtonsComponent
    },
    {
      path: 'cards',
      component: CardsComponent
    },
    {
      path: 'modals-alerts',
      component: ModalsAndAlertsComponent
    },
    {
      path: 'notifiers',
      component: NotifierComponent
    },
    {
      path: 'panels',
      component: PanelsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
