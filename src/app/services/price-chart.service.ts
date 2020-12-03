import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PriceChartService {

  constructor(private http : HttpClient) { }

  getAllPricesFromDate(dateFrom: any, dateTo: any){
    return this.http.get(`${environment.baseURLAPI}/ticketprice/byperiod?startingDate=${dateFrom}&endingDate=${dateTo}%27`);
  }

}