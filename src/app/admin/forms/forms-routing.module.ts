import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ValidationFormComponent } from './components/validation-form/validation-form.component';
import { WizardFormComponent } from './components/wizard-form/wizard-form.component';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [
    {
      path: 'basic-form',
      component: BasicFormComponent
    },
    {
      path: 'validation-form',
      component: ValidationFormComponent
    },
    {
      path: 'wizard-form',
      component: WizardFormComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
