import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'blazey';
  
  constructor(private router:Router)
  {}

  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate([""]);
  }
}
