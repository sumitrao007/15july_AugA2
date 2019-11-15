import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import {FormsModule} from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    TwowayBindingComponent,
    IfdirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
