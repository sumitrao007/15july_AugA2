import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number;
  myusername:string="";
  queryobj={
    brand:"Renuka Group",
    year:2016,
    rank:1
  };

  constructor() { }

  ngOnInit() {
    this.myid=9;
    this.myusername="Ashwini Patil";
  }

}
