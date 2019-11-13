import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  name:string="";
  name2:string="";
  mysquare:number=0;
  mysquare1:number=0;
  num1:number=2;
  num2:number=3;
  backcolor:string="";

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    console.log("Click Event Occur!!!!");
    this.name="Hefshine PVT LTD!!!!";
  }

  onclick1(){
    this.name2="Sumit Raokhande";
  }


  clickMe(event){
    console.log(event);
  }

  clickMe1(event){
    console.log(event);
    console.log(event.target.value);
  }

  onchange(){
    console.log("On Change Occur!!!");

  }

  onchange1(){
    this.backcolor="yellow";
  }

}
