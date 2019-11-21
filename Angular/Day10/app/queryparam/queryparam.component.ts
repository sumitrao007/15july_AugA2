import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  myobj={};
  constructor(private routequery:ActivatedRoute) { }

  ngOnInit() {
    this.routequery.queryParamMap
    .subscribe(queryparam=>{
      console.log(queryparam.get('brand'));
      console.log(queryparam.get('year'));
      console.log(queryparam.get('rank'));
      this.myobj={
        mybrand:queryparam.get('brand'),
        myyear:queryparam.get('year'),
        myrank:queryparam.get('rank')
      }


    });
  }

}
