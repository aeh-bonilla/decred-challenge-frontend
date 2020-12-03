import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class NoticesService {

  constructor(private http : HttpClient) { }

  urlAPI = 'http://18.212.237.160:8080/api/v1/news';


  getAllNotice(){
    return this.http.get(`${this.urlAPI}`);
  }

  getAllNoticeFromDate(dateFrom: string, dateTo: string){
    return this.http.get(`${this.urlAPI}?startingDate=${dateFrom}&endingDate=${dateTo}`);
  }

}