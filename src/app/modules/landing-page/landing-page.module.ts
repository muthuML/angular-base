import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page.component';
import {LandingPageRoutingModule} from './landing-page.routing.module';
import {MaterialModule } from '../../material.modules/material.module';

@NgModule({
  declarations: [LandingPageComponent, DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
