import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-html',
  templateUrl: './dynamic-html.component.html',
  styleUrls: ['./dynamic-html.component.scss']
})
export class DynamicHtmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addElement(): void{
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style', 'width: 100px; height: 50px; background-color: white');
    // console.log(newDiv);
    const newContent = document.createTextNode('Hi there');
    // console.log(newContent);
    newDiv.appendChild(newContent);
    const divToInsertInto = document.getElementById('main-div');
    // console.log(divToInsertInto);
    divToInsertInto.appendChild(newDiv);
  }

}
