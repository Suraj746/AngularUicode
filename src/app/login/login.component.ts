import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user=new User();
   msg='';
   role :string='';
   roles :string[];

  constructor(private _service : RegistrationService,private _router:Router) {
    this.roles=[
      'admin','user'
    ]
   }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{ 
        console.log("Response Recieved");
      this._router.navigate(['/loginsuccess'])
    
    },
      error =>{
         console.log("exception occured");
         this.msg="Bad Credentials,Please enter valid loginId and Password";
      }
    )

  }
  gotoregistration(){
    this._router.navigate(['/registration']);
  }
  gotoadminLogin(){
    this._router.navigate(['/adminLogin']);
  }

}
