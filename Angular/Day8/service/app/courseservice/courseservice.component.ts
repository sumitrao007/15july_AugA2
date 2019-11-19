import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courseservice',
  templateUrl: './courseservice.component.html',
  styleUrls: ['./courseservice.component.css']
})
export class CourseserviceComponent implements OnInit {
mycourse=[];

  constructor(private service:CourseService) {
   
   // this.mycourse=service.getcourse();
   }

  ngOnInit() {
  
    this.mycourse=this.service.getcourse();

  }

}
