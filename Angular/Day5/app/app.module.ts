import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { IteractionComponent } from './iteraction/iteraction.component';
import { IteraChildComponent } from './itera-child/itera-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    IteractionComponent,
    IteraChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
