import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  strdetail:string="Lorem ipsum dolor Sit amEt consectetur, adipisicing elit. Laboriosam dolorum natus quas nulla nobis esse quos, quia ex? Ipsam consequatur cupiditate delectus rerum magnam nisi dolorem accusantium aperiam, voluptates laudantium!";

  strdetail1:string="Welcome to Pipe Session Demo.....";
  myjson={
    fnmae:"Hefshine",
    lname:"PVT LTD ",
    id:1
  };
  num1:number=5.678556;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
