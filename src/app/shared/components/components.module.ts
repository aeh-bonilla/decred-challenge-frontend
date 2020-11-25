import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material/material-module';

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
        MaterialModule
    ],
    providers: [
        HeaderComponent,
        FormSearchComponent,
    ]
  })
  export class ComponentsModule { }
  