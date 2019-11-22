import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { CardModule } from '@addapptables/card';
import { TranslateModule } from '@addapptable/components/translate/translate.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PageRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    CardModule,
    MatIconModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
  ]
})
export class PagesModule { }
