import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule } from './material.modules/material.module';
import {dataService} from './services/data.service';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import {SharedComponentsModule} from './shared.components/shared-components.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedComponentsModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
