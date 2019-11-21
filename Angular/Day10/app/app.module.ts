import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routeImport } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { Page1Component } from './page1/page1.component';
// import { Page2Component } from './page2/page2.component';
// import { QueryparamComponent } from './queryparam/queryparam.component';
// import { FollowerComponent } from './follower/follower.component';
// import { MyfollowerComponent } from './myfollower/myfollower.component';
import { RouterModule } from '@angular/router';
//import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    routeImport
    // HomeComponent,
    // Page1Component,
    // Page2Component,
    // QueryparamComponent,
    // FollowerComponent,
    // MyfollowerComponent,
    // NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {
    //     path:"",
    //     component:HomeComponent
    //   },

    //   {
    //     path:"PAGE1/:id",
    //     component:Page1Component
    //   },
    //   {
    //     path:"PAGE2/:id/:username",
    //     component:Page2Component
    //   },
    //   {
    //     path:"QueryParamter",
    //     component:QueryparamComponent
    //   },
    //   {
    //     path:"Follower",
    //     component:FollowerComponent
    //   },
    //   {
    //     path:"MyFollower",
    //     component:MyfollowerComponent
    //   },
    //   {
    //     path:"**",
    //     component:NotfoundComponent
    //   }
    // ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
