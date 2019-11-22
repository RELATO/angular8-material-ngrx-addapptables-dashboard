import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from './localization/i18n.localization';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { AddapptableRouterSerializer } from './shared/router-serializer.shared';
import { MarkdownModule } from 'ngx-markdown';
import { AlertModule } from '@addapptables/alert';
import { ModalModule } from '@addapptables/modal';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NotifierModule } from '@addapptables/notifier';
import { ResponsiveModule } from '@addapptables/responsive';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // Angular native modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    // Translate application
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    // ngrx modules
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    AuthModule,
    MarkdownModule.forRoot(),

    // Addapptables modules
    ResponsiveModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    NotifierModule.forRoot(),

    // Sidebar
    SidebarModule.forRoot()
  ],
  providers: [{
    provide: RouterStateSerializer, useClass: AddapptableRouterSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
