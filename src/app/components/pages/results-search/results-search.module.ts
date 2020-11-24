import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[
    HeaderComponent
  ]
})
export class ResultsSearchModule { }
