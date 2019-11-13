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

  count:number=0;
  dispMSG="";
  dispMSG1:string="";

  myflag:boolean=true;

  mycolor:string="white";

  mycolor1:string="white";

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

  OnClickCount(){
    if(this.myflag==true){
      // console.log("Event Occur!!!!");
      this.myflag=false;
      console.log("Event Occur!!!!");
    }
   
  }

  onkeyup(){

    if(this.count<=7){
      this.count=this.count+1;
    }else{
      this.dispMSG="Your Limit is Over!!!!";
    }

    //console.log("On Key Up Event occur!!!!");
  }

  onkeyDown(){


    if(this.count<=7){
      this.count=this.count+1;
    }else{
      this.dispMSG1="Your Limit is Over!!!!";
    }
  //  console.log("On Key Down Event Occur!!!!");
  }


  onRed(){
    this.mycolor="red";
  }

  onGreen(){
    this.mycolor="green";
  }
  onBlue(){
    this.mycolor="blue";
  }

  onYellow(){
    this.mycolor="yellow";
  }


  oncolorchange(value){
    this.mycolor1=value;
  }



}
