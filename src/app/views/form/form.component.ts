import { User } from './../../services/users/user.model';
import { UserService } from './../../services/users/user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name: string = ''
  age: any = ''
  srcImg: string = ''

  constructor(private router: Router, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.userService.showUsers()
  }

  createUser(): void {
    console.log('this.user :>> ', );
    let user: User = { name: this.name , age: this.age, srcImg: this.srcImg}
    this.userService.addUser(user)
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

  navToUsers(): void {
    this.router.navigate(['/users'])
  }
}
