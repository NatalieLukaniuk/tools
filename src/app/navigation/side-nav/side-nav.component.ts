import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NavItem} from '../../models/nav-item';
import {AuthServiceService} from '../../auth/auth-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {
  @Output() closeSideNav: EventEmitter<void> = new EventEmitter<void>();
  @Input() nav: NavItem[] | undefined;
  isAuthorized = false;
  authSubscription: Subscription | undefined;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(AuthStatus => this.isAuthorized = AuthStatus);
  }

  onClose(): void {
    this.closeSideNav.emit();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  logout(): void{
    this.authService.logout();
    this.onClose();
  }
}
