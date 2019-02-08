import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { FormControl,FormGroup,FormControlName } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm
  constructor(private router:Router, private _base:BaseService, public snackBar : MatSnackBar) { }

  ngOnInit() {
    // document.getElementById('login-button').addEventListener('click',function(event){
    //   event.preventDefault();
    // document.getElementById('wrapper').classList.add('form-success');
    // const fade = document.getElementsByTagName('form');     
//})
this.loginForm = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
})

}
login() {
  this._base.login(this.loginForm.value).subscribe(result => {
    console.log(result);
    this._base.isAuthenticated = true;
    if (result.isAuthenticated) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', this.loginForm.value.email);
      this.router.navigate(['genre']);
    } else {
      console.log('not authenticated');
      this.snackBar.open(result.message, '', {
        duration: 3000
      });
    }
  })
}

}
