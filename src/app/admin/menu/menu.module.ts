import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuComponent } from './menu.component';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './effects/menu.effects';
import { MenuStore } from './stores/menu.store';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { MenuModule as AddapptableMenuModule } from '@addapptables/menu';

@NgModule({
  imports: [
    SharedModule,
    ReduxRegisterModule.forFeature('menu', { sidebar: MenuStore }),
    EffectsModule.forFeature([MenuEffects]),
    AddapptableMenuModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }
