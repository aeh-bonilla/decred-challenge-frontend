import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NoticesService {

  constructor(private http : HttpClient) { }

  urlAPI = '/news';


  getAllNotice(){
    return this.http.get(`${this.urlAPI}`);
  }

  getAllNoticeFromDate(dateFrom: string, dateTo: string){
    return this.http.get(`${environment.baseURLAPI}${this.urlAPI}?startingDate=${dateFrom}&endingDate=${dateTo}`);
  }

}