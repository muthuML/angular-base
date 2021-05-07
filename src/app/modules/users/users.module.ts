import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { usersPageRoutingModule } from './users.routing.module';
import {MaterialModule } from '../../material.modules/material.module';


@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    usersPageRoutingModule
  ]
})
export class UsersModule { }
