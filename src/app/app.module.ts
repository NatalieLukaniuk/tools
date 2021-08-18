import { CheatsheetsDataService } from './cheatsheets/services/cheatsheets-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import {MaterialModule} from './material/material.module';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';
import { ConverterComponent } from './converter/converter.component';
import { LoginComponent } from './auth/login/login.component';
import {PlaygroundModule} from './playground/playground.module';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthServiceService} from './auth/auth-service.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';
import { TodoModule } from './to-do/to-do.module';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent,
    CheatsheetsComponent,
    ConverterComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    PlaygroundModule,
    HttpClientModule,
    TodoModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EntityDataModule.forRoot(entityConfig),
  ],
  exports: [
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [AuthServiceService, CheatsheetsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
