import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent} from './side-nav/side-nav.component';
import { HeaderComponent }from './header/header.component';
import {MaterialModule } from '../material.modules/material.module';
import { RouterModule } from '@angular/router';
import { SidenavService } from './side-nav/sideNav.service';
@NgModule({
  declarations: [HeaderComponent,SideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[HeaderComponent,SideNavComponent],
  providers: [SidenavService],
})
export class SharedComponentsModule { }
