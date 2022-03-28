import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  na = new FormControl('data');
  dataArray: { name: any; age: any; city: any }[];
  myform = this.fb.group({
    data: new FormArray([new FormControl('')]),
  });

  constructor(private fb: FormBuilder) {
    //Converting array string to array
    let arr = '[a,b,c,d]';
    let b = arr.slice(1, -1).split(',');
    console.log(b);
  }

  ngOnInit() {
    this.dataArray = [
      { name: 'Aditya', age: '23', city: 'Pune' },
      { name: 'Priya', age: '24', city: 'Bhopal' },
      { name: 'Ritika', age: '23', city: 'Banglore' },
    ];
  }

  addRow() {
    this.myform.controls.push;
  }
}
