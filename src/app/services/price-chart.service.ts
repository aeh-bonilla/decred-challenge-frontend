import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PriceChartService {

  constructor(private http : HttpClient) { }

  urlAPI = 'https://dcrdata.decred.org/api/chart/ticket-price?axis=time&bin=window';


  getAllPrices(){
    return this.http.get(`${this.urlAPI}`);
  }

}