import { UserService } from './../../services/users/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/users/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) { }

  users: User[] = []

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.users = this.userService.getUsers()
  }
}
