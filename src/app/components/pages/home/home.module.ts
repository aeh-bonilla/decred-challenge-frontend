import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
// import { MaterialModule } from 'src/app/material/material-module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ], exports: [
  ]
})
export class HomeModule { }
