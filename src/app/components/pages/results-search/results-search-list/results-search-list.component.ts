import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NoticesService } from 'src/app/services/notices.service';
import { ObjNotice } from 'src/app/shared/interfaces/notices.interface';
import { Router, ActivatedRoute } from '@angular/router'
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PriceChartService } from 'src/app/services/price-chart.service';
import { ObjChartData } from 'src/app/shared/interfaces/chartdata.interface';

@Component({
  selector: 'app-results-search-list',
  templateUrl: './results-search-list.component.html',
  styleUrls: ['./results-search-list.component.scss']
})

export class ResultsSearchListComponent implements OnInit {

  //Paginación
  page_size: number = 10;
  page_number: number = 1;
  page_size_options = [5, 10, 25, 50, 100];

  dateFrom: any;
  dateTo: any;

  cont = 0;

  resultToday: boolean = false;
  resultLength = 0;

  objNotice: Array<ObjNotice> = [];

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
      borderCapStyle: '1px',
      borderColor: '#091440',
      backgroundColor: '#2ed6a180',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(  private noticeSvc : NoticesService, 
                private objDatePipe: DatePipe,
                private route: ActivatedRoute,
                private router: Router,
                private PriceChartSvc:PriceChartService){}
                
 
  ngOnInit(){
    
    this.dateFrom = this.route.snapshot.paramMap.get('dateFrom');
    this.dateTo = this.route.snapshot.paramMap.get('dateTo');
    console.log("Fecha 1: "+this.dateFrom+ " Fecha2: "+this.dateTo)

    if(this.dateFrom == null && this.dateTo == null){
      this.resultToday = true;
      this.dateFrom = this.objDatePipe.transform(new Date(), 'YYYY-MM-dd');
      this.dateTo = this.objDatePipe.transform(new Date(), 'YYYY-MM-dd');
      this.getNoticesFromDate(this.dateFrom, this.dateTo);
      this.getDataChart(this.dateFrom, this.dateTo);
    }else{
      this.getNoticesFromDate(this.dateFrom, this.dateTo);
      this.getDataChart(this.dateFrom, this.dateTo)
    }
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  //METODOS

  filterArticles(dateFrom : any, dateTo : any){
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

  getNoticesFromDate(dateInit: any, dateEnd: any){
    console.log("Fecha 1: "+dateInit+ " Fecha2: "+dateEnd)
    this.noticeSvc.getAllNoticeFromDate(dateInit,dateEnd).subscribe( (objResponse: any) => {
      let arrResponse: Array<any> = objResponse.articles;
      this.objNotice = arrResponse.map(x => {
        var obj = new ObjNotice();
        obj.author      = x.author;
        obj.title       = x.title;
        obj.url         = x.url;
        obj.description = x.description;
        obj.publishedAt  = this.objDatePipe.transform(x.publishedAt, 'YYYY/MM/dd');
        return obj;
      });
      console.log("Noticias consultadas: "+this.objNotice.length);
      this.resultLength = this.objNotice.length;
      console.log( this.resultLength);
    });
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
