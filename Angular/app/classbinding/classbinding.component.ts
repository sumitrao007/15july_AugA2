import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  mysucess:string="success";
  mydanger:string="danger";
  iserror:boolean=true;

  iserror1:boolean=false;
  isSpecial:boolean=true;

  rating:number=6;

  myclassobj={
    "success": !this.iserror1,
    "warning" : this.iserror1,
    "special" : this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

}
