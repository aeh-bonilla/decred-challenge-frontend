import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsSearchListRoutingModule } from './results-search-list-routing.module';
import { ResultsSearchListComponent } from './results-search-list.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/material/material-module';


@NgModule({
  declarations: [ResultsSearchListComponent],
  imports: [
    CommonModule,
    ResultsSearchListRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})

export class ResultsSearchListModule { }
