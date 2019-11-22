import { NgModule } from '@angular/core';
import { AddapptableComponentsRoutingModule } from './addapptable-components-routing.module';
import { CardDocumentationComponent } from './card-documentation/card-documentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertDocumentationComponent } from './alert-documentation/alert-documentation.component';
import { CardModule } from '@addapptables/card';
import { MatIconModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
import { NotifierDocumentationComponent } from './notifier-documentation/notifier-documentation.component';

@NgModule({
  imports: [
    SharedModule,
    AddapptableComponentsRoutingModule,
    MatIconModule,
    CardModule,
    MarkdownModule.forChild()
  ],
  declarations: [CardDocumentationComponent, AlertDocumentationComponent, NotifierDocumentationComponent]
})
export class AddapptableComponentsModule { }
