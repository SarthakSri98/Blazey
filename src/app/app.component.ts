import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'blazey';
  
  constructor(private router:Router, private _baseService : BaseService)
  {}

  logout()
  {
    this._baseService.isAuthenticated = false;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate([""]);
  }
}
