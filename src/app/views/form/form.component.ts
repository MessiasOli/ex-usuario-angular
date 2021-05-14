import { UserService } from './../../services/users/user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  // criarUsuario(): void {
  // }

  navToUsers(): void {
    this.router.navigate(['/users'])
  }

}
