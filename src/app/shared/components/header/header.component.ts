import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { marketCapService } from 'src/app/services/market-cap.service';
import { ObjCripto } from '../../interfaces/cripto.interface';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { ResultsSearchListComponent } from 'src/app/components/pages/results-search/results-search-list/results-search-list.component'


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
        transform: 'translateX(-25000px)',
        opacity: 1
      })),
      transition('void => *', [
        animate('520s')
      ]),
      transition('* => void', [
        animate('520s')
      ]),
    ])
  ] 
})
export class HeaderComponent implements OnInit {

  objCrypto: Array<ObjCripto> =[];

  dateFrom!: Date;
  dateTo!: Date;
  
  minDate = new Date(2016,1,8);
  minDate2 = this.dateFrom;
  maxDate = new Date();
 
  constructor(private router : Router, private objmarketCap : marketCapService, private objResult : ResultsSearchListComponent) { }

  ngOnInit(){
    this.getAllCrypto();
  }

  //BUTTONS

  btnRedirectHome(){
    this.router.navigate(['/home']);
  }

  btnSearch(){
    this.objResult.filterArticles(this.dateFrom, this.dateTo);
  }

  //EVENTS

  addDateFrom(event: MatDatepickerInputEvent<Date>) {
    this.dateFrom = new Date(String(event.value?.toDateString()));
    // console.log(this.dateFrom)
  }

  addDateTo(event: MatDatepickerInputEvent<Date>) {
    this.dateTo = new Date(String(event.value?.toDateString()));
  }

  //METODS

  getAllCrypto(){
    this.objmarketCap.getDataAllCryptos()
    .subscribe(( objResponse : any) => {
      let arrReponse : Array<any> = objResponse.data;

      console.log(arrReponse);
      
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


