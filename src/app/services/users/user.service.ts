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
      id: 1,
      name: 'Marcos',
      age: 25,
      srcImg: 'https://thispersondoesnotexist.com/image'
    },
  ]

  hasUser(name: string): boolean {
    let user = this.userList.find(u => u.name == name)
    if(user != null){
      return true
    }
    return false
  }

  addUser(user : User): void {
    if(this.hasUser(user.name)){
      this.userList.push(user)
    }else{
      alert("Usuário já cadastrado!")
    }
  }

  showUsers(): User[] {
    return this.userList
  }
}
