import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

myid:string;
  constructor(private routeparam:ActivatedRoute) { }

  ngOnInit() {

    this.routeparam.paramMap
    .subscribe(parammap=>{
      console.log(parammap);
      console.log(parammap.get('id'));
      this.myid=parammap.get('id');

    })

  }

}
