import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

productDetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod eligendi saepe incidunt minus quis harum doloribus, a assumenda quidem voluptates corrupti eum sequi, corporis fugiat vitae facere excepturi sed!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod eligendi saepe incidunt minus quis harum doloribus, a assumenda quidem voluptates corrupti eum sequi, corporis fugiat vitae facere excepturi sed! .Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod eligendi saepe incidunt minus quis harum doloribus, a assumenda quidem voluptates corrupti eum sequi, corporis fugiat vitae facere excepturi sed!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod eligendi saepe incidunt minus quis harum doloribus, a assumenda quidem voluptates corrupti eum sequi, corporis fugiat vitae facere excepturi sed!";

  constructor() { }

  ngOnInit() {
  }

}
