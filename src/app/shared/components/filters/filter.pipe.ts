import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], dateFrom: Date, dateTo: Date): any {
    
    console.log(dateFrom);
    console.log(dateTo);
    
    let list : Array<any>;

    if(dateFrom != undefined && dateTo == undefined) {
      list = value.filter(x => new Date(x.publishedAt) >= dateFrom);
      console.log("Entra en if 1");
    } else if (dateFrom == undefined && dateTo != undefined) {
      list = value.filter(x => new Date(x.publishedAt) <= dateTo);
      console.log("Entra en if 2");
      console.log("Arreglo de articulos: "+list)
    } else if (dateFrom != undefined && dateTo != undefined) {
      list = value.filter(x => new Date(x.publishedAt) >= dateFrom && new Date(x.publisheAt) <= dateTo);
      console.log("Entra en if 3");
    } else {
      list = value;
    }

    return list;
  }  
}
