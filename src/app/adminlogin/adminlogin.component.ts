import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user=new User();
   msg='';
  constructor(private _service : RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
  adminUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{ 
        console.log("Response Recieved");
      this._router.navigate(['/adminsuccess'])
    
    },
      error =>{
         console.log("exception occured");
         this.msg="Bad Credentials,Please enter valid loginId and Password";
      }
    )

  }

  gotoadminLogin(){
    this._router.navigate(['/adminLogin']);
  }
  gotouserLogin(){
    this._router.navigate(['/login']);
  }


}
