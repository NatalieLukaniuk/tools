import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {NavItem} from './models/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isScreenWide: boolean | undefined;
  nav: NavItem[] = [
    {
      path: 'to-do',
      title: 'to-do app',
      icon: 'checklist',
      authRequired: true
    },
    {
      path: 'converter',
      title: 'converter',
      icon: 'cached',
      authRequired: true
    },
    {
      path: 'cheatsheets',
      title: 'cheatsheets',
      icon: 'code',
      authRequired: true
    },
    {
      path: 'playground',
      title: 'playground',
      icon: 'color_lens',
      authRequired: false
    },
  ];
  constructor(
    private breakpointObserver: BreakpointObserver
  ){}

  ngOnInit(): void {
    this.isScreenWide = this.breakpointObserver.isMatched('(min-width: 768px)');
  }
}
