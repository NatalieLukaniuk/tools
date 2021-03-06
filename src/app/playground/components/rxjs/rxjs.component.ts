import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
character = {
  name: 'James'
};

date: number;
newCharacter = {};
  constructor() { }

  ngOnInit(): void {
    this.newCharacter = {...this.character, color: 'white'};
    this.date = Date.now();
  }

}
