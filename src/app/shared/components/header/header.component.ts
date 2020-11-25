import { Component, HostBinding} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private isDark = true;

  constructor(private router : Router) { }

  redirectHome(){
    this.router.navigate(['/home']);
  }

  @HostBinding('class')
  get themeMode(){
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

}
