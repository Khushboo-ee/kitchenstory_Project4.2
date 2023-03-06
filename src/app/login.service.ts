import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uinfo:User[] = [
    new User("client1","password"),
    new User("client2","password"),
    new User("client3","password"),
    new User("client4","password")
  ];

  adinfo:Admin = new Admin("admin","password");

  constructor() { }
 UserChkDetails(un:string,pswd:string):boolean{
    var chk=false;
    for(let i=0;i<this.uinfo.length;i++)
    {
      if(this.uinfo[i].uname==un && this.uinfo[i].pwd==pswd)
        chk=true;
    }
    return chk;
  }
  
  AdminChkDetails(un:string,pswd:string):boolean{
    var chk = false;
    if (this.adinfo.uname==un && this.adinfo.pwd==pswd) {
      chk = true;
    } else {
      chk = false;
    }
    return chk;
  }
}
