import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  na = new FormControl('data');
  
  constructor() {
    //Converting array string to array
    let arr = '[a,b,c,d]';
    let b = arr.slice(1, -1).split(',');
    console.log(b);
  }

  ngOnInit() {}
}
