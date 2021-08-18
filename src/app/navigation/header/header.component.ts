import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NavItem} from '../../models/nav-item';
import {AuthServiceService} from '../../auth/auth-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
@Input() isScreenWide: boolean | undefined;
@Input() nav: NavItem[] | undefined;
@Output() sideNavToggle: EventEmitter<void> = new EventEmitter<void>();
isAuthorized = false;
authSubscription: Subscription | undefined;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(AuthStatus => this.isAuthorized = AuthStatus);
  }

  onSideNavToggle(): void {
    this.sideNavToggle.emit();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  logout(): void{
    this.authService.logout();
  }
}
