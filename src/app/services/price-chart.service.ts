import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PriceChartService {

  constructor(private http : HttpClient) { }

  urlAPI = 'http://18.212.237.160:8080/api/v1/ticketprice/byperiod?startingDate=2020-11-29&endingDate=2020-12-02%27';


  getAllPricesFromDate(dateFrom: any, dateTo: any){
    return this.http.get(`http://18.212.237.160:8080/api/v1/ticketprice/byperiod?startingDate=${dateFrom}&endingDate=${dateTo}%27`);
  }

}