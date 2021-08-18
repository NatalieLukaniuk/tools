import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }

  ngOnInit(): void {
  }

}
