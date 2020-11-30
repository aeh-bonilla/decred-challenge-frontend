import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class marketCapService {

  constructor(private http : HttpClient) { }

  urlAPI = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=4&CMC_PRO_API_KEY=';
  urlInfoAPI = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?start=1&limit=4';


  keyAPI = '89fc6225-cdbd-48b9-b8d8-5a4d6a46d3a3';


  getDataAllCryptos(){
    return this.http.get(`${this.urlAPI}${this.keyAPI}`);
  }

}