import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   na = new FormControl('data');
  name = 'Angular ' + VERSION.major;
  constructor() {
    //Converting array string to array
    let arr = '[a,b,c,d]';
    let b = arr.slice(1, -1).split(',');
    console.log(b);
  }
}
