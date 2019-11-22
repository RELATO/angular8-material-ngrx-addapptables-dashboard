import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { InstallationComponent } from './installation/installation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { CardModule } from '@addapptables/card';
import { MatIconModule, MatDividerModule, MatListModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    SharedModule,
    GettingStartedRoutingModule,
    CardModule,
    MatIconModule,
    MatDividerModule,
    MarkdownModule.forChild(),
    MatListModule
  ],
  declarations: [
    IntroductionComponent,
    InstallationComponent
  ]
})
export class GettingStartedModule { }
