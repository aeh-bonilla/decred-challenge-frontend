import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { blockService } from 'src/app/services/block.service';
import { NoticesService } from 'src/app/services/notices.service';
import { ObjNotice } from 'src/app/shared/interfaces/notices.interface';

@Component({
  selector: 'app-results-search-list',
  templateUrl: './results-search-list.component.html',
  styleUrls: ['./results-search-list.component.scss']
})

export class ResultsSearchListComponent implements OnInit {

  //Paginación
  page_size: number = 10;
  page_number: number = 1;
  page_size_options = [5, 10, 25, 50, 100];



  objNotice: Array<ObjNotice> = [];

  constructor( private noticeSvc : NoticesService, private objDatePipe: DatePipe){}
 
  ngOnInit(){
    this.getNotices();
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  getNotices(){
    this.noticeSvc.getAllNotice().subscribe( (objResponse : any)=>{
      let arrResponse: Array<any> = objResponse.articles;
      this.objNotice = arrResponse.map(x => {
          var obj = new ObjNotice();
          obj.author      = x.author;
          obj.title       = x.title;
          obj.url         = x.url;
          obj.description = x.description;
          obj.publishedAt = this.objDatePipe.transform(x.publishedAt, 'yyyy/mm/dd');

          return obj;
      });
      console.log(objResponse);
    });
  }
}
