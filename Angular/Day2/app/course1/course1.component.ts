import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course1',
  // templateUrl: './course1.component.html',
  template: `
    <h1> Using Template !!!!!! </h1>
    <h2> Multiple tag we can use in template but not Recomondaded!!! </h2>
  `,
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {


  
  constructor() { }

  ngOnInit() {
  }

}
