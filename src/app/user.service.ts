import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
private isUserLoggedin;
private Username;
  constructor() {
    this.isUserLoggedin=false;
   };
   setUserloggedin(){
     this.isUserLoggedin=true;
   }
getUserloggedin(){
  return this.isUserLoggedin;
}
}
