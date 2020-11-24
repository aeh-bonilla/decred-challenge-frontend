import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsSearchDetailsComponent } from './results-search-details.component';

const routes: Routes = [{ path: '', component: ResultsSearchDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsSearchDetailsRoutingModule { }
