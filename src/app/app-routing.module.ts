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
  { path: 'search-details/:id', loadChildren: () => import('./components/pages/results-search/results-search-details/results-search-details.module').then(m => m.ResultsSearchDetailsModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
