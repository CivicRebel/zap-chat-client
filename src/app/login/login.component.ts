import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client, LoginRequest } from '../client/api.client';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { 
  email!: string;
  password!: string;

  constructor(
    private apiClient: Client,
    private router: Router
  ){}

  login() {
    const request = new LoginRequest();
    request.email = this.email;
    request.password = this.password;
    this.apiClient.login(true, true, request).then(() => {
      console.log('this');
      this.router.navigateByUrl('/chat');
    });
  }
}
