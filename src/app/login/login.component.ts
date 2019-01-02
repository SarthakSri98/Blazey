import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    document.getElementById('login-button').addEventListener('click',function(event){
      event.preventDefault();
    
    //const fade = document.getElementsByTagName('form');
    //fade(fade);
    document.getElementById('wrapper').classList.add('form-success');
    const fade = document.getElementsByTagName('form');
  //  fade(fade);-})
})

}
login()
{
    this.router.navigate(['genre']);
}

}
