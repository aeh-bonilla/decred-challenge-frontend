import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material/material-module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsSearchListComponent } from '../results-search/results-search-list/results-search-list.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ComponentsModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers:[ResultsSearchListComponent]
})
export class HomeModule { }
