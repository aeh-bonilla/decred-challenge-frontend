import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AgendasService } from 'src/app/services/agendas.service';
import { ObjAgenda } from '../../interfaces/agenda.interface';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss']
})
export class CardStatusComponent implements OnInit {

  constructor(private objAgendaSvc: AgendasService,
              private objDatePipe: DatePipe,)  {}

  objAgenda: Array<ObjAgenda> = [];

  ngOnInit(): void {
    this.getAllAgendas()
  }

  getAllAgendas(){
    this.objAgendaSvc.getAllAgendas().subscribe(( objResponse : any) => {
      this.objAgenda = objResponse.map((x: any) => {
        var obj = new ObjAgenda();

        obj.name        = x.name;
        obj.status      = x.status;
        obj.description = x.description;
        obj.startTime   = this.objDatePipe.transform(x.startTime, 'YYYY/MM/dd');
        obj.expireTime  = this.objDatePipe.transform(x.expireTime, 'YYYY/MM/dd');
        return obj;
      });
      console.log(this.objAgenda);
    });
  }
}
