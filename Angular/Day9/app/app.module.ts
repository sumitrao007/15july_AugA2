import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { HttpModule } from '@angular/http';
import { HttpserviceService } from './httpservice.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    HttpserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
