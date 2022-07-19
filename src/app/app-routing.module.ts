import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationService } from './registration.service';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:'loginsuccess',component:LoginsuccessComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'adminLogin',component:AdminloginComponent
  },
  {
    path:'adminsuccess',component:AdminsuccessComponent
  },
  {
    path:'edituser',component:EditUserComponent
  },{
    path: 'edituser/:id',component:EditUserComponent
  },
  {
    path:'addUser',component:AdduserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
