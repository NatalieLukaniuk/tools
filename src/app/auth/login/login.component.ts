import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthData} from '../auth-data.model';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(data: AuthData): void {
    this.authService.login(data);
  }
}
