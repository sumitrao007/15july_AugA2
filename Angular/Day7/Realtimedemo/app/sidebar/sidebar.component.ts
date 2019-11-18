import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  songstype=["Bollywood","Hollywood","Marathi","Bhojapuri","Punjabi"];

@Output() sidebarevent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(id){
    console.log(id);
    this.sidebarevent.emit(id);

  }

}
