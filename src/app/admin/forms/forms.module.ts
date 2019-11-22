import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VerticalFormComponent } from './components/vertical-form/vertical-form.component';
import { ReactiveFormsModule, FormsModule as FormModuleAngular } from '@angular/forms';
import { FormsComponent } from './forms.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatSelectModule,
  MatButtonModule,
  MatStepperModule
} from '@angular/material';
import { HorizontalFormComponent } from './components/horizontal-form/horizontal-form.component';
import { FormSomeComponentsComponent } from './components/form-some-components/form-some-components.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { AutocompleteComponent } from './components/form-some-components/components/autocomplete/autocomplete.component';
import { DropdownComponent } from './components/form-some-components/components/dropdown/dropdown.component';
import { ValidationFormComponent } from './components/validation-form/validation-form.component';
import { WizardFormComponent } from './components/wizard-form/wizard-form.component';
import { CardModule } from '@addapptables/card';

@NgModule({
  imports: [
    FormsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CardModule,
    FormModuleAngular,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule
  ],
  declarations: [
    VerticalFormComponent,
    FormsComponent,
    HorizontalFormComponent,
    FormSomeComponentsComponent,
    BasicFormComponent,
    AutocompleteComponent,
    DropdownComponent,
    ValidationFormComponent,
    WizardFormComponent
  ]
})
export class FormsModule { }
