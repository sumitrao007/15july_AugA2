import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {
  Name:string="";
  myName:string="";
  Name1:string="";
  constructor() { }

  ngOnInit() {
  }

  OnClick(value){
    console.log(value);
    this.Name=value;
  }

  OnClick1(value){
    this.myName=value;
  }

  onClick2(myinput){
    this.Name1=myinput.value;
    myinput.style.background="red";
    myinput.value="";

  }

}
