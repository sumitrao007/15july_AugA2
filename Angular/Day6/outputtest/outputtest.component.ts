import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputtest',
  templateUrl: './outputtest.component.html',
  styleUrls: ['./outputtest.component.css']
})
export class OutputtestComponent implements OnInit {

  @Output()  childtoparentdata=new EventEmitter();

  Message:string="Data From Child to Parent!!!!!!";

  @Output() childobj=new EventEmitter();

  @Output() childArrObj=new EventEmitter();

  obj={
    company:"Google",
    turnover:"50000$",
    rank:1
  };

multitypearr=[
  {
    company:"Google",
    turnover:"50000$",
    rank:1
  },
  {
    company:"Infosys",
    turnover:"40000$",
    rank:2
  },
  {
    company:"Renuka Businsess Group",
    turnover:"10000$",
    rank:3
  }
];

  constructor() { }

  ngOnInit() {
  }

  onClick(){

    this.childtoparentdata.emit(this.Message);
  }

  SendObj(){
    this.childobj.emit(this.obj);
  }

  SendArrObj(){
    this.childArrObj.emit(this.multitypearr);
  }

}
