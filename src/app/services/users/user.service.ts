import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  showUsers(msg: string): void {
    console.log("Mostrar usuários")
  }
}
