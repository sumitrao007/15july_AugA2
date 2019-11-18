import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofsongs',
  templateUrl: './listofsongs.component.html',
  styleUrls: ['./listofsongs.component.css']
})
export class ListofsongsComponent implements OnInit {

  mycolor=['black','red','blue','orange','green','yellow'];
  arrindex:number=0;
  constructor() { }

  ngOnInit() {
  }

  datafromParent(id){
    this.arrindex=id;

  }

}
