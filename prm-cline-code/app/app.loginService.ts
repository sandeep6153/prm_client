import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{

    constructor(private http:Http){}
  
    checkUser(){
        return this.http.get('http://10.65.79.219:8080/prm-web/user').map((res:Response)=>res.json());
    }

}
