import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./components/pages/results-search/results-search-list/results-search-list.module').then(m => m.ResultsSearchListModule) },
  { path: 'search/:dateFrom/:dateTo', loadChildren: () => import('./components/pages/results-search/results-search-list/results-search-list.module').then(m => m.ResultsSearchListModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
