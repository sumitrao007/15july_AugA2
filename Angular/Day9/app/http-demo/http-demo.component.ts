import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {



  posts=[];
  ishidden:boolean=true;
  mytitle1:string="";
  mybody1:string="";
  myid1:string="";

  // constructor(private http:Http) 
  // { }

  constructor(private service:HttpserviceService){

  }
  ngOnInit() {

this.service.getposts()
.subscribe(response=>{
  console.log(response.json());
  this.posts=response.json();
},error=>{
  alert("Unexpected Error!!!");
})
  }

  Adddata(title1,body1){

    let createdata={
      title:title1,
      body:body1
    };
    this.service.addPosts(createdata)
    .subscribe(response=>{
      console.log(response.json());
      let id1=response.json().id;
      console.log(id1);

      this.posts.splice(0,0,{id:id1,title:title1,body:body1});
    })

  }

  OnUpdate(item){
    this.mytitle1=item.title;
    this.mybody1=item.body;
    this.myid1=item.id;
    this.ishidden=false;
  }

  update(){
    let updateobj={
      id:this.myid1,
      title:this.mytitle1,
      body:this.mybody1
    };
    this.service.UpdatePosts(updateobj)
    .subscribe(response=>{
      console.log(response.json());
    });
  }

  onDelete(item){
    this.service.DeletePosts(item.id)
    .subscribe(response=>{
      console.log(response.json());
      this.posts.splice(item.id-1,1);
    })
  }

}
