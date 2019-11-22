import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootsrtapdemo',
  templateUrl: './bootsrtapdemo.component.html',
  styleUrls: ['./bootsrtapdemo.component.css']
})
export class BootsrtapdemoComponent implements OnInit {

  product=[
    {
      id:1,
      name:"Shahi Utane",
      price:30
    },
    {
      id:2,
      name:"Shahi Utane1",
      price:60
    },
    {
      id:3,
      name:"Shahi Utane2",
      price:50
    },
    {
      id:4,
      name:"Shahi Utane3",
      price:50
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
