import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { FormControl,FormGroup,FormControlName} from '@angular/forms'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
   signupForm;
  constructor(private _base:BaseService, private router:Router) { }

  ngOnInit() {
     this.signupForm = new FormGroup({
       email : new FormControl(),
       password : new FormControl()
     })

  }
  
  

  createUser()
  {
    //console.log(this.signupForm.value);
    this._base.signup(this.signupForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['']);

    })
  }

}
