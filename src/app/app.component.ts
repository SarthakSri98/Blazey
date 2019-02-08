import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'blazey';
  currentUser : string;
  constructor(private router:Router, private _baseService : BaseService)
  {}

  ngOnInit()
  {
    if(localStorage.getItem('token'))
    {
      this._baseService.isAuthenticated = true;
      this.currentUser = localStorage.getItem('user');
    }
  }

  logout()
  {
    this._baseService.isAuthenticated = false;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate([""]);
  }
}
