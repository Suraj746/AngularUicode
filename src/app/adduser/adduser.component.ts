import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user=new User();
  msg='';

  constructor(private _service: RegistrationService,private _router:Router) { }
  ngOnInit(): void {
  }
  addUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
    data =>{
      console.log("Response Recieved");
      this.msg="Registration successful";
      this._router.navigate(['/adminsuccess']);
    },
    error =>{
      console.log("exception occured");
      this.msg=error.error;
    }
    )

}
}

