import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course=['Angular 2+','React js','Vue Js','Embber js','MEAN Stack'];

  product=[
    {
      Name:"Shahi Utane",
      quantity: 5,
      weight : "30gm",
      price: 29
    },
    {
      Name:"Gulab Utane",
      quantity: 5,
      weight : "30gm",
      price: 29
    },
    {
      Name:"Perfume",
      quantity: 1,
      weight : "30ml",
      price: 80
    },
  ]
  selected:string="";
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    this.selected=item.Name;
  }

}
