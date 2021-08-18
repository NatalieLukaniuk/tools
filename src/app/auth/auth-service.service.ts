import { Injectable } from '@angular/core';
import {User} from './user.model';
import {AuthData} from './auth-data.model';

import {Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

private user: User | null | undefined;
authChange = new Subject<boolean>();

  constructor(private router: Router) { }

  registerUser(authdata: AuthData): void {
    this.user = {
      email: authdata.email,
      userID: Math.round(Math.random() * 100000).toString(),
    };
    this.authSuccessfully();
  }

  login(authdata: AuthData): void {
    this.user = {
      email: authdata.email,
      userID: Math.round(Math.random() * 100000).toString(),
    };
    this.authSuccessfully();
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['']);
  }

  getUser(): User {
    return {...this.user}; // створює новий обєкт з тими ж властивостями що й this.user, зміни в ньому не впливають на оригінал в сервісі
  }

  isAuth(): boolean{
    return this.user != null;
  }

  private authSuccessfully(){
    this.authChange.next(true);
    this.router.navigate(['']);
  }
}
