import { Component } from '@angular/core';
import { JsonService } from './services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DCR MEMORIES';

  constructor(private json : JsonService){}
  
  getJson(){
    this.json.getJson();
    console.log(this.json);
  }
}
