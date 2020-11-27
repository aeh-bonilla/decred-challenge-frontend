import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        HeaderComponent,
        FormSearchComponent,
    ],
    exports: [
        HeaderComponent,
        FormSearchComponent,
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
        HeaderComponent,
        FormSearchComponent,
    ]
  })
  export class ComponentsModule { }
  