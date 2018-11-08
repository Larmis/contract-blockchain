import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  login: Login = {
    username: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
