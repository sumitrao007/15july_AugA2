import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {
  myname:string="";

  myname1:string="";
  divtext:string="";

  ishidden:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onDisplay(){
    this.ishidden=false;
  }

}
