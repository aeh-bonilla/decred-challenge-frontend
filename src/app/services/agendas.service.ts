import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AgendasService {

  constructor(private http : HttpClient) { }

  urlAPI = '/agenda';


  getAllAgendas(){
    return this.http.get(`${environment.baseURLAPI}${this.urlAPI}`);
  }

}
