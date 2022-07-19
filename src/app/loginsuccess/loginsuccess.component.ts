import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  gotoLogin(){
    this._router.navigate(['/login']);
  }

}
