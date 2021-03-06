import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.model';
import {AuthenticationService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthenticationService, private _router: Router, private userService: UserService) {
    if (this._auth.loggedIn) {
      this._router.navigate(['/']);
    }
  }
  User: any = [];
  username;
  password;

  login(): void {
    if (this.username != '' && this.password != '') {
      if (this._auth.login(this.username, this.password)) {
        this._router.navigate(["/home"]);
        window.location.reload();
      }
      else
        alert("Wrong username or password");
    }
  }
  loadUsers(){
    return this.userService.getUsers().subscribe(data => this.User = data);
  }
  ngOnInit(): void {
    this.loadUsers();
  }

}
