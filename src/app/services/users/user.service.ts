import { Injectable } from '@angular/core';
import { User } from "./user.model"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  userList: User[] = [
    {
      id: 1,
      name: 'Marcelo',
      age: 28,
      srcImg: 'https://thispersondoesnotexist.com/image'
    },
    {
      id: 2,
      name: 'Marcos',
      age: 25,
      srcImg: 'https://thispersondoesnotexist.com/image'
    },
  ]

  hasUser(name: string): boolean {
    let user = this.userList.filter(u => u.name == name)
    console.log('tem usuário user :>> ', user);
    if(user.length > 0){
      return false
    }
    return true
  }

  addUser(user : User): void {
    if(this.hasUser(user.name)){
      this.userList.push(user)
    }else{
      alert("Usuário já cadastrado!")
    }
    console.log('this.userList :>> ', this.userList);
  }

  showUsers(): User[] {
    return this.userList
  }
}
