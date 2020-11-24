import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsSearchListRoutingModule } from './results-search-list-routing.module';
import { ResultsSearchListComponent } from './results-search-list.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
  declarations: [ResultsSearchListComponent, HeaderComponent],
  imports: [
    CommonModule,
    ResultsSearchListRoutingModule,
    
  ],
  exports:[
    HeaderComponent
  ]
})
export class ResultsSearchListModule { }
