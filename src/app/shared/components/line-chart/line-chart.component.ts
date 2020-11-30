import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PriceChartService } from 'src/app/services/price-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'PRECIO DCR' },
    { data: [5, 59, 12, 81, 120, 55, 2], label: 'PRECIO TICKET' },
  ];
  public lineChartLabels: Label[] = ['2000-05-15', '2000-06-15', '2000-07-15', '2000-08-15', '2000-09-15', '2000-10-15', '2000-11-15'];
  
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

  constructor( private PriceSvc: PriceChartService){}

  ngOnInit(): void {
    // this.getPrices();
  }

  getPrices():void{
    this.PriceSvc.getAllPrices().subscribe((objResponse : any) =>{
      console.log(objResponse);
    });
  }

}
