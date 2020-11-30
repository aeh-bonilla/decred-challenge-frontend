import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PaginatePipe } from './paginator/paginate.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        FormSearchComponent,
        LineChartComponent,
        PaginatePipe
    ],
    exports: [
        HeaderComponent,
        FormSearchComponent,
        LineChartComponent,
        PaginatePipe
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        ChartsModule
    ],
    providers: [
        HeaderComponent,
        FormSearchComponent,
        LineChartComponent,
        PaginatePipe
    ]
  })
  export class ComponentsModule { }
  