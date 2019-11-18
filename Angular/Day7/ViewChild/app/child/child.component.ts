import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  count:number=0;
  constructor() { }

  ngOnInit() {
  }

  IncrmentByOne(){
    this.count=this.count+1;
  }
  
  DecremetByOne(){
    this.count=this.count-1;
  }

}
