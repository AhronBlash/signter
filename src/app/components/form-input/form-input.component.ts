import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  constructor() { }

  listSingog: Array<string> =["אוהב ישראל","אבא שאול","מוצפי"]

  ngOnInit() {
  }

}
