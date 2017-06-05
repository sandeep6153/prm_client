//# sourceMappingURL=app.loginComponent.js.map
import { Component } from '@angular/core';
import {LoginService } from './app.loginService';


@Component({
  selector: 'login',
  template: `Username:<input type="text"/><br/>Password:<input type="password"/><br/><input type="submit" text="Login" (click)="checkUser()"/>
 {{userData}}
  `
})
export class LoginFormComponent { 
    constructor(private loginService:LoginService){}
    name = 'Angular'; 
    author:string="Sandeep Sharma"
    userData="";
    checkUser(){
        this.loginService.checkUser().subscribe(data=>this.userData=data);
    }
}