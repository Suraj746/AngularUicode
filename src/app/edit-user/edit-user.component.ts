import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:number;
  user=new User();
  msg='';

  constructor(private _service: RegistrationService,private _router:Router,private _activateRouter :ActivatedRoute) { }

  ngOnInit(): void {
     this.id =this._activateRouter.snapshot.params['id'];
     this._service.getUserById(this.id).subscribe(
      data =>{
        console.log(data);
        this.user=data;
        console.log("data recieved");
      },
      error => {console.log("exceptoion occured")
      this.msg="Not updated"
    }

     )
    
  }
  updateUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
    data =>{
      console.log("Response Recieved");
      this.msg="Updated successful";
      this._router.navigate(['/adminsuccess']);
    },
    error =>{
      console.log("exception occured");
      this.msg=error.error;
    }


    )


}

}
