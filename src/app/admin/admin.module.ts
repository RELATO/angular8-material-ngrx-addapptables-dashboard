import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ProgressBarModule } from '@addapptable/components/progress-bar/progress-bar.module';
import { AddapptableContainerModule } from '@addapptable/components/addapptable-container/addapptable-container.module';
import { MatButtonModule } from '@angular/material';
import { SidebarModule } from 'ng-sidebar';
import { ConfigurationComponent } from './layout/components/configuration/configuration.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    MenuModule,
    ToolbarModule,
    ProgressBarModule,
    AddapptableContainerModule,
    MatButtonModule,
    SidebarModule,
    MatRadioModule,
    FormsModule
  ],
  declarations: [LayoutComponent, ConfigurationComponent]
})
export class AdminModule { }
