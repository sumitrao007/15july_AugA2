import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number;
  myusername:string="";
  queryobj={
    brand:"Renuka Group",
    year:2016,
    rank:1
  };

  constructor(private route:Router) { }

  ngOnInit() {
    this.myid=9;
    this.myusername="Ashwini Patil";
  }

  onClick(value){
    if(value==1){
     // console.log("In If Loop");
     this.myid=7;
      this.route.navigate(['/PAGE1',this.myid]);

    }else if(value==2){
      this.myid=5;
      this.myusername="Pranali Aug A2"
      this.route.navigate(['/PAGE2',this.myid,this.myusername]);
    }else if(value==3){
      this.queryobj.brand="Google";
      this.queryobj.year=1995;
      this.queryobj.rank=1
      this.route.navigate(['/QueryParamter'],
      { queryParams: this.queryobj })

    }else if(value==4){
      this.route.navigate(['/Follower']);
    }
  }

}
