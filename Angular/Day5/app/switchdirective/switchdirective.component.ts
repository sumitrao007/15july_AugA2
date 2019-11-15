import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  mycolor:string="black";
  mycolor1:string='';
  constructor() { }

  ngOnInit() {
  }
  onClick(myinput){
   this.mycolor1=myinput.value; 
  }

}
