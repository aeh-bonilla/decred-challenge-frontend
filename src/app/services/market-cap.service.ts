import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class marketCapService {

  constructor(private http : HttpClient) { }

  urlAPI = 'http://18.212.237.160:8080/api/v1/latestprices';


  getDataAllCryptos(){
    return this.http.get(`${this.urlAPI}`);
  }

}