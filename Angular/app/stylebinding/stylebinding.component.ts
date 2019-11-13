import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  mycolor:string='red';
rating:number=2;
mycolor1:string='red';
mycolor2:string="green";

mystyle={
  color:"thistle",
  fontStyle:"italic",
  fontFamily :" 'Courier New', Courier, monospace"
};


  constructor() { }

  ngOnInit() {
  }

}
