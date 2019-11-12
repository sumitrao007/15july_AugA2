import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string="Hefshine PVT LTD!!!";

  ishidden:boolean=true;
  ishidden1:boolean=true;

  imgurl:string="../../assets/Desert.jpg";

  constructor() { }

  ngOnInit() {
  }

}
