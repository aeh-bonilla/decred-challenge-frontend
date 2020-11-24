import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsSearchDetailsRoutingModule } from './results-search-details-routing.module';
import { ResultsSearchDetailsComponent } from './results-search-details.component';


@NgModule({
  declarations: [ResultsSearchDetailsComponent],
  imports: [
    CommonModule,
    ResultsSearchDetailsRoutingModule
  ]
})
export class ResultsSearchDetailsModule { }
