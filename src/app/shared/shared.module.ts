import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AddapptablePerfectScrollbarModule } from '@addapptables/perfect-scrollbar';
import { CardModule } from '@addapptables/card';
import { MatIconModule } from '@angular/material';

// Shared module contains important modules
@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    AddapptablePerfectScrollbarModule,
    CardModule,
    MatIconModule
  ]
})
export class SharedModule { }
