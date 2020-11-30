import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[], page_size: number, page_number: number): any {
    if(!array.length) return[]

    page_size = page_size || 10;
    
    page_number = page_number || 1;

    --page_number;

    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

}
