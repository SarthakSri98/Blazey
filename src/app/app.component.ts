import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './services/base.service';
import { MatDialog,MatDialogConfig } from '@angular/material/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'blazey';
  currentUser : string;
  height1 = '600px';
  width1 = '600px';
  constructor(private router:Router, private _baseService : BaseService, private modalService: MatDialog)
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

  openHelp(content) {

    console.log('gesg');

    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height1,
      width: this.width1,
      panelClass: 'custom-modalbox'
    });

   }
  Cross_click(){
      this.modalService.closeAll();
  }
}
