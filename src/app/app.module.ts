import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material-module';

@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [BrowserModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
