import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate {
constructor(private authService: AuthServiceService,
            private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if(this.authService.isAuth()){
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
 }
