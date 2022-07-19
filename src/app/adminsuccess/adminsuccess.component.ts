import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.css']
})
export class AdminsuccessComponent implements OnInit {
  _users: User[] =[];
  user1 = new User();
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  this._service.getUserList().subscribe(
      data =>{
        console.log("response recieved"),
        this._users=data;
      },
      error =>{
        console.log("exception occured")
      }


  )
  }
  gotouserregistration(){
    this._router.navigate(['/registration']);
  }
  gotoEditUser(id: number){
    this._router.navigate(['/edituser',id]);
  }
  gotoLogin(){
    this._router.navigate(['/adminLogin']);
  }
  gotoAddUser(){
    this._router.navigate(['/addUser']);
  }
  deactivateUser(id : number){
    this._service.deleteUser(id).subscribe(
      data => {
        console.log("Deactivated Successfully");
        this._service.getUserList()

      },
      error =>{
        console.log("exception Ocuured");

      }
    )
  }
  
 deactivateuser(user : User){
   console.log(user.id);
   console.log(user.fullName);
   console.log(user.emailId);
   console.log(user.status);
   console.log(user.password);
   this.user1.id=user.id;
   this.user1.fullName=user.fullName;
   this.user1.createdDate=user.createdDate;
   this.user1.password=user.password;
   this.user1.status=true;
   this.user1.updatedDate=user.updatedDate;
   this.user1.emailId=user.emailId;
   this._service.deleteUser(user.id);
   this._service.registerUserFromRemote(this.user1);
   this._service.getUserList();
 }

}
