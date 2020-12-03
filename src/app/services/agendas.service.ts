import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AgendasService {

  constructor(private http : HttpClient) { }

  urlAPI = 'http://18.212.237.160:8080/api/v1/agenda';


  getAllAgendas(){
    return this.http.get(`${this.urlAPI}`);
  }

}
