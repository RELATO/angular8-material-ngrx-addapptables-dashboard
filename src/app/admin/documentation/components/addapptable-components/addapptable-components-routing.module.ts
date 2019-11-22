import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDocumentationComponent } from './card-documentation/card-documentation.component';
import { AlertDocumentationComponent } from './alert-documentation/alert-documentation.component';
import { NotifierDocumentationComponent } from './notifier-documentation/notifier-documentation.component';

const routes: Routes = [{
  path: 'card',
  component: CardDocumentationComponent
},
{
  path: 'alert',
  component: AlertDocumentationComponent
},
{
  path: 'notifier',
  component: NotifierDocumentationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddapptableComponentsRoutingModule { }
