import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

}
