import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

interface Response {
  hsl: {
    value: string;
    h: number;
  }
}
interface Palette{
  incoming: string;
  activeBtn: any;
  inactiveCheckbox: any;
  shade2: any;
  shade3: any;
  shade1: any;
  shade4: any;
  shade5: any;
  shade6: any;
  shade7: any;
}
@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {
  palette1: Palette = {
    incoming: '',
  activeBtn: '',
  inactiveCheckbox: '',
  shade1: '',
  shade2: '',
  shade3: '',
  shade4: '',
  shade5: '',
  shade6: '',
  shade7: '',
  };
  incomingColor = '#378bf4';
  color: any;
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.calculate1(this.incomingColor);
  }
  test(){
    console.log(this.palette1);
  }

  calculate1(col){
    const rgb = this.hexToRgb(col);
    const color = this.rgbToHsl(rgb);
    this.palette1.incoming = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
    console.log(this.palette1.incoming);
    this.palette1.activeBtn = `hsl(${color[0] - 13}, 99%, 45%)`;
    this.palette1.inactiveCheckbox = `hsl(${color[0] - 12}, 82%, 89%)`;
    this.palette1.shade1 = `hsl(${color[0] - 5}, 84%, 40%)`;
    this.palette1.shade2 = `hsl(${color[0] + 3}, 98%, 52%)`;
    this.palette1.shade3 = `hsl(${color[0] - 13}, 100%, 45%)`;
    this.palette1.shade4 = `hsl(${color[0]}, 63%, 47%)`;
    this.palette1.shade5 = `hsl(${color[0]}, 74%, 54%)`;
    this.palette1.shade6 = `hsl(${color[0] + 4}, 89%, 61%)`;
    this.palette1.shade7 = `hsl(${color[0]}, 88%, 65%)`;

    let root = document.documentElement;
    root.style.setProperty('--primary', `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`);
    console.log(root.style);
    root.style.setProperty('--shade1', `hsl(${color[0] - 13}, 99%, 45%)`);
    root.style.setProperty('--shade2', `hsl(${color[0] - 12}, 82%, 89%)`);
    root.style.setProperty('--shade3', `hsl(${color[0] - 5}, 84%, 40%)`);
    root.style.setProperty('--shade4', `hsl(${color[0] + 3}, 98%, 52%)`);
    root.style.setProperty('--shade5', `hsl(${color[0] - 13}, 100%, 45%)`);
    root.style.setProperty('--shade6', `hsl(${color[0]}, 63%, 47%)`);
    root.style.setProperty('--shade7', `hsl(${color[0]}, 74%, 54%)`);
    root.style.setProperty('--shade8', `hsl(${color[0] + 4}, 89%, 61%)`);
    root.style.setProperty('--shade9', `hsl(${color[0]}, 88%, 65%)`);

    console.log(color);

   
  }

  hexToRgb (color) {
    let hex = color[0] === '#' ? color.slice(1) : color;
    let c;
  
    // expand the short hex by doubling each character, fc0 -> ffcc00
    if (hex.length !== 6) {
      hex = ((() => {
        const result = [];
        for (c of Array.from(hex)) {
          result.push(`${c}${c}`);
        }
        return result;
      })()).join('');
    }
    const colorStr = hex.match(/#?(.{2})(.{2})(.{2})/).slice(1);
    const rgb = colorStr.map(col => parseInt(col, 16));
    rgb.push(1);
    return rgb;
  }
  
  rgbToHsl (rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    const add = max + min;
  
    const hue =
      min === max ?
        0
      : r === max ?
        (((60 * (g - b)) / diff) + 360) % 360
      : g === max ?
        ((60 * (b - r)) / diff) + 120
      :
        ((60 * (r - g)) / diff) + 240;
  
    const lum = 0.5 * add;
  
    const sat =
      lum === 0 ?
        0
      : lum === 1 ?
        1
      : lum <= 0.5 ?
        diff / add
      :
        diff / (2 - add);
  
    const h = Math.round(hue);
    const s = Math.round(sat * 100);
    const l = Math.round(lum * 100);
    const a = rgb[3] || 1;
  
    return [h, s, l];
  }
}
