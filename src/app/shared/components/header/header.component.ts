import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { marketCapService } from 'src/app/services/market-cap.service';
import { ObjCripto } from '../../interfaces/cripto.interface';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { ResultsSearchListComponent } from 'src/app/components/pages/results-search/results-search-list/results-search-list.component'
import { LineChartComponent } from '../line-chart/line-chart.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('enterState',[
      state('void', style ({
        transform: 'translateX(1120px)',
        opacity: 1
      })),
      state('*', style ({
        transform: 'translateX(-26000px)',
        opacity: 1
      })),
      transition('void => *', [
        animate('530s')
      ]),
      transition('* => void', [
        animate('520s')
      ]),
    ])
  ] 
})
export class HeaderComponent implements OnInit {

  objCrypto: Array<ObjCripto> =[];

  dateFrom!: any;
  dateTo!: any;
  
  minDate = new Date(2016,1,8);
  minDate2 = this.dateFrom;
  maxDate = new Date();
 
  constructor(private router        : Router, 
              private objmarketCap  : marketCapService, 
              private objResult     : ResultsSearchListComponent,
              private objChart      : LineChartComponent,
              private objDatePipe   : DatePipe) { }

  ngOnInit(){
    this.getAllCrypto();
  }

  //BUTTONS

  btnRedirectHome(){
    this.router.navigate(['/home']);
  }

  btnSearch(dateFrom: any, dateTo: any){
    this.router.navigate(['/search',this.dateFrom, this.dateTo]);
    this.objResult.getNoticesFromDate(this.dateFrom, this.dateTo);
    this.objChart.getDataChart(this.dateFrom, this.dateTo);
  }

  //EVENTS

  addDateFrom(event: MatDatepickerInputEvent<Date>) {
    const dateFromEvent = new Date(String(event.value?.toDateString()));
    this.dateFrom = this.objDatePipe.transform(dateFromEvent, 'YYYY-MM-dd')
    console.log(this.dateFrom)
  }

  addDateTo(event: MatDatepickerInputEvent<Date>) {
    const dateFromEvent = new Date(String(event.value?.toDateString()));
    this.dateTo = this.objDatePipe.transform(dateFromEvent, 'YYYY-MM-dd')
    console.log(this.dateTo)
  }

  //METODS

  getAllCrypto(){
    this.objmarketCap.getDataAllCryptos()
    .subscribe(( objResponse : any) => {
      let arrReponse : Array<any> = objResponse.data;
      this.objCrypto = arrReponse.map(x => {
        var obj = new ObjCripto();

        obj.symbol    = x.symbol;
        obj.cmc_rank  = x.cmc_rank;
        obj.name      = x.name;
        obj.price     = Math.round((x.quote.USD.price)* 100) / 100;

        return obj;
      });
    });
  }

}


