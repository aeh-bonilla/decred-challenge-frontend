import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PriceChartService } from 'src/app/services/price-chart.service';
import { ObjChartData } from 'src/app/shared/interfaces/chartdata.interface';
import { Route, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  dateFrom: any = null;
  dateTo: any = null;

  objData: Array<ObjChartData> = [];

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Precio de Tickets (DCR)' },
  ];
  lineChartLabels: Label[] = [];

  dataPrices: Array<any>= [];

  
  
  
  public lineChartOptions = {
    responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(  private PriceChartSvc : PriceChartService,
                private objDatePipe   : DatePipe,
                private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.dateFrom);
    console.log(this.dateTo);
    if(this.dateFrom == null && this.dateTo == null){
      console.log("Entra a if");
      this.dateFrom = this.objDatePipe.transform(new Date(),'YYYY-MM-dd');
      this.dateTo = this.objDatePipe.transform(new Date(), 'YYYY-MM-dd')
      console.log(this.dateFrom);
      console.log(this.dateTo);
      this.getDataChart(this.dateFrom, this.dateTo);
    }
    // this.getDataChart('2020-11-29', '2020-12-02')
  }

  getDataChart(dateFrom: any, dateTo: any){
    this.PriceChartSvc.getAllPricesFromDate(dateFrom, dateTo).subscribe( (objResponse: any) => {

      this.objData = objResponse.map( (x: any) => {
        var obj = new ObjChartData();
        obj.dateForPrice      = x.dateForPrice;
        obj.ticketPrice       = x.ticketPriceInDcr;
        return obj;
      });
      var i = 0;
      for(const item of this.objData){
        this.lineChartLabels[i] = item.dateForPrice;
        this.dataPrices[i] = item.ticketPrice;
        // console.log(this.dataPrices[i]);
        i++;
      }
      this.lineChartData[0].data = this.dataPrices;
      console.log(this.lineChartData[0].data);
      console.log(this.lineChartLabels);
    })
  }
}
