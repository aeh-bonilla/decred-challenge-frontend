import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Block } from '../shared/interfaces/block.interface';

@Injectable({
  providedIn: 'root'
})

export class blockService {

  constructor(private http : HttpClient) { }

  getBlockbyIndex(index : number){
    return this.http.get<Block[]>(`${environment.baseURLAPI}/block/${index}`);
  }

  getBestBlock(){
    return this.http.get<Block[]>(`${environment.baseURLAPI}/block/best`);
  }


}
