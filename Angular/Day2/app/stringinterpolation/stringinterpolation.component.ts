import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string="Sumit Raokhande";
  imgurl:string="../../assets/Desert.jpg";

  constructor() { }

  ngOnInit() {
  }
 

  getname(){
    return this.name;
    
  }


}
