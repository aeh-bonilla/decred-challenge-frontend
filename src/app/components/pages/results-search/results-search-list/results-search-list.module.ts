import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsSearchListRoutingModule } from './results-search-list-routing.module';
import { ResultsSearchListComponent } from './results-search-list.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/material/material-module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ResultsSearchListComponent],
  imports: [
    CommonModule,
    ResultsSearchListRoutingModule,
    MaterialModule,
    ComponentsModule,
    ChartsModule
  ],
  exports:[
    ResultsSearchListComponent
  ]
})

export class ResultsSearchListModule { }
