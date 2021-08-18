import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TestDialogComponent} from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
progress = 0;
timer: number | undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  start(): void {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  stop(): void {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(TestDialogComponent, {data: {
      progress: this.progress
      }});
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.progress = 0;
    } else {
        this.start();
      }
    });
  }

  restart(): void {
    this.progress = 0;
    this.start();
  }
}
