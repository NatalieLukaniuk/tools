import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthData} from '../auth-data.model';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(data: AuthData): void{
    this.authService.registerUser(data);
  }
}
