import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteraction',
  templateUrl: './iteraction.component.html',
  styleUrls: ['./iteraction.component.css']
})
export class IteractionComponent implements OnInit {

  msg:string;

  myobj={
    name:"Hefshine PVT",
    addr:"Pune",
    pincode:411043
  };

  arrobj=[
    {
      name:"Hefshine PVT",
      addr:"Pune",
      pincode:411043
    },
    {
      name:"Seed Infotech",
      addr:"Pune1",
      pincode:411043
    },
    {
      name:"Shree Engineering Academy",
      addr:"Satara",
      pincode:411043
    }
  ];


  msgdata;

  dataobj;

  Arrobj;

  constructor() { }

  ngOnInit() {
    this.msg="Data From Paraent!!!!";
  }

}
