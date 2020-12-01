import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NoticesService {

  constructor(private http : HttpClient) { }

  urlAPI = 'http://newsapi.org/v2/top-headlines?country=us&';

  keyAPI = 'apiKey=c459b1e0310f475e8d8247cc7922705f';


  getAllNotice(){
    return this.http.get(`${this.urlAPI}${this.keyAPI}`);
  }

}