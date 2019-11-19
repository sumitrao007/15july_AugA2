import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseserviceComponent } from './courseservice/courseservice.component';
import { CourseService } from './course.service';
import { Course1Component } from './course1/course1.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseserviceComponent,
    Course1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
