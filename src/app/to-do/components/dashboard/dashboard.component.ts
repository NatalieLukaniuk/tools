import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input()
  categories: string[] | undefined;

  @Input()
  currentTab = '';

  @Output() tabChanged = new EventEmitter<any>();

  isScreenWide: boolean | undefined;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isScreenWide = this.breakpointObserver.isMatched('(min-width: 768px)');
  }
  changeTab(newCurrentTab: string): void{
    if (this.currentTab !== newCurrentTab){
      this.tabChanged.emit(newCurrentTab);
    }
  }
}
