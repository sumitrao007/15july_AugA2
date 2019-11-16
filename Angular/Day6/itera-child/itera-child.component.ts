import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itera-child',
  templateUrl: './itera-child.component.html',
  styleUrls: ['./itera-child.component.css']
})
export class IteraChildComponent implements OnInit {

 @Input() paraentdat;

 @Input() paraentdata1;
 
 @Input() paraentdata2;

  constructor() { }

  ngOnInit() {
  }

}
