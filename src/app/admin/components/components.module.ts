import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatButtonToggleModule
} from '@angular/material';
import { CardsComponent } from './components/cards/cards.component';
import { SimpleCardComponent } from './components/cards/components/simple-card/simple-card.component';
import { MaterialCardComponent } from './components/cards/components/material-card/material-card.component';
import { OvalCardComponent } from './components/cards/components/oval-card/oval-card.component';
import { CardFormComponent } from './components/cards/components/card-form/card-form.component';
import { FormsModule } from '@angular/forms';
import { ModalsAndAlertsComponent } from './components/modals-and-alerts/modals-and-alerts.component';
import { AlertSuccessComponent } from './components/modals-and-alerts/components/alert-success/alert-success.component';
import { AlertInfoComponent } from './components/modals-and-alerts/components/alert-info/alert-info.component';
import { AlertWarningComponent } from './components/modals-and-alerts/components/alert-warning/alert-warning.component';
import { AlertErrorComponent } from './components/modals-and-alerts/components/alert-error/alert-error.component';
import { AlertConfirmationComponent } from './components/modals-and-alerts/components/alert-confirmation/alert-confirmation.component';
import { AlertCustomButtonsComponent } from './components/modals-and-alerts/components/alert-custom-buttons/alert-custom-buttons.component';
import { AlertSimpleComponent } from './components/modals-and-alerts/components/alert-simple/alert-simple.component';
import { AlertCustomBodyComponent } from './components/modals-and-alerts/components/alert-custom-body/alert-custom-body.component';
import {
  CustomBodyComponent
} from './components/modals-and-alerts/components/alert-custom-body/components/custom-body/custom-body.component';
import { NotifierComponent } from './components/notifier/notifier.component';
import { NotifierSuccessComponent } from './components/notifier/components/notifier-success/notifier-success.component';
import { NotifierInfoComponent } from './components/notifier/components/notifier-info/notifier-info.component';
import { NotifierWarningComponent } from './components/notifier/components/notifier-warning/notifier-warning.component';
import { NotifierErrorComponent } from './components/notifier/components/notifier-error/notifier-error.component';
import { PanelsComponent } from './components/panels/panels.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabComponent } from './components/panels/components/tab/tab.component';
import { BasicExpansionPanelComponent } from './components/panels/components/basic-expansion-panel/basic-expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomTabComponent } from './components/panels/components/custom-tab/custom-tab.component';
import { CardModule } from '@addapptables/card';
import { AlertModule } from '@addapptables/alert';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotifierModule } from '@addapptables/notifier';
import { NotifierCustomComponent } from './components/notifier/components/notifier-custom/notifier-custom.component';
import { NotifierSuccessCustomComponent } from './components/notifier/components/notifier-success-custom/notifier-success-custom.component';
import { NotifierInfoCustomComponent } from './components/notifier/components/notifier-info-custom/notifier-info-custom.component';
@NgModule({
  imports: [
    SharedModule,
    ComponentsRoutingModule,
    MatButtonModule,
    MatIconModule,
    CardModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    AlertModule,
    NotifierModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule
  ],
  declarations: [
    ComponentsComponent,
    ButtonsComponent,
    CardsComponent,
    SimpleCardComponent,
    MaterialCardComponent,
    OvalCardComponent,
    CardFormComponent,
    ModalsAndAlertsComponent,
    AlertSuccessComponent,
    AlertInfoComponent,
    AlertWarningComponent,
    AlertErrorComponent,
    AlertConfirmationComponent,
    AlertCustomButtonsComponent,
    AlertSimpleComponent,
    AlertCustomBodyComponent,
    CustomBodyComponent,
    NotifierComponent,
    NotifierSuccessComponent,
    NotifierInfoComponent,
    NotifierWarningComponent,
    NotifierErrorComponent,
    PanelsComponent,
    TabComponent,
    BasicExpansionPanelComponent,
    CustomTabComponent,
    NotifierCustomComponent,
    NotifierSuccessCustomComponent,
    NotifierInfoCustomComponent
  ],
  entryComponents: [
    CustomBodyComponent,
    NotifierCustomComponent
  ]
})
export class ComponentsModule { }
