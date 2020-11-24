import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsSearchListComponent } from './results-search-list.component';

const routes: Routes = [{ path: '', component: ResultsSearchListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsSearchListRoutingModule { }
