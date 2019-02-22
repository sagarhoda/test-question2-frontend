import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
