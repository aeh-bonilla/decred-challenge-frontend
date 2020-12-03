import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ResultsSearchListComponent } from '../results-search/results-search-list/results-search-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit { 

  minDate = new Date(2016,1,8);
  maxDate = new Date();

  dateFrom: any;
  dateTo: any;

  dateFromNewYear: any =  this.objDatePipe.transform(new Date(2020,12,1), 'YYYY-MM-dd');
  dateToNewYear: any =  this.objDatePipe.transform(new Date(2020,12,2), 'YYYY-MM-dd');

  range = new FormGroup({
    start:  new FormControl(),
    end:    new FormControl()
  });


  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private objDatePipe: DatePipe,
              private objResult : ResultsSearchListComponent,
              private router : Router) {}


  ngOnInit(): void {}

  //BUTTONS

  btnSearch(dateFrom: any, dateTo: any){
    console.log("Noticias consultadas de: "+this.dateFrom+" a: "+this.dateTo);
    this.router.navigate(['/search',this.dateFrom, this.dateTo]);
  }

  //EVENTS

  addDateFrom(event: MatDatepickerInputEvent<Date>) {
    const dateFromEvent = new Date(String(event.value?.toDateString()));
    this.dateFrom = this.objDatePipe.transform(dateFromEvent, 'YYYY-MM-dd')
    console.log("Date 1: "+this.dateFrom)
  }

  addDateTo(event: MatDatepickerInputEvent<Date>) {
    const dateFromEvent = new Date(String(event.value?.toDateString()));
    this.dateTo = this.objDatePipe.transform(dateFromEvent, 'YYYY-MM-dd')
    console.log("Date 2: "+this.dateTo)
  }

}
