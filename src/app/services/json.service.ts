import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http : HttpClient) { }

  baseURLAPI = 'https://api.github.com/users/ibuioli';

  getJson(){
    //get metodo para obtener respuesta
    return this.http.get(`${this.baseURLAPI}`);
  }

  // blog(){
  //   return this.http.get(`${this.baseURLAPI}`);
  // }
}
