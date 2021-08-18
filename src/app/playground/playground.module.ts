import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from '../material/material.module';
import { TestingComponent } from './components/testing/testing.component';
import {PlaygroundComponent} from './playground.component';
import {HttpClientModule} from '@angular/common/http';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { DynamicHtmlComponent } from './components/dynamic-html/dynamic-html.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [
    TestingComponent,
    PlaygroundComponent,
    BootstrapComponent,
    SpinnerComponent,
    TestDialogComponent,
    RxjsComponent,
    DynamicHtmlComponent,
  ],
  entryComponents: [TestDialogComponent]
})
export class PlaygroundModule { }
