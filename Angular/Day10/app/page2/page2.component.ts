import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  myid:number;
  myusernmae:string;

  constructor(private routeoaram:ActivatedRoute) { }

  ngOnInit() {
    this.routeoaram.paramMap
    .subscribe(paramap=>{
      console.log(paramap.get('id'));
      console.log(paramap.get('username'));

      this.myid=+paramap.get('id');
      this.myusernmae=paramap.get('username');

    })
  }

}
