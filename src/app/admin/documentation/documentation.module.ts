import { NgModule } from '@angular/core';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GettingStartedModule } from './components/getting-started/getting-started.module';
import { AddapptableComponentsModule } from './components/addapptable-components/addapptable-components.module';

@NgModule({
  imports: [
    SharedModule,
    DocumentationRoutingModule,
    GettingStartedModule,
    AddapptableComponentsModule
  ]
})
export class DocumentationModule { }
