import { Component, HostBinding } from '@angular/core';
import { JsonService } from './services/json.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DCR MEMORIES';
  
  private isDark = false;

  @HostBinding('class')
  get themeMode(){
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  // constructor(public json: JsonService){

  //   this.json.getJson('https://api.github.com/users/ibuioli').subscribe( (res: any) =>{
  //     console.log(res);
  //   }); 
  // }
}
