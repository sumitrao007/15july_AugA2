import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) {

   }

getposts(){
  return this.http.get(this.url);
}

addPosts(createdata){
  return this.http.post(this.url,JSON.stringify(createdata))
}

UpdatePosts(updatedata){
  return this.http.put(this.url+"/"+updatedata.id,JSON.stringify(updatedata));
}

DeletePosts(id){
  return this.http.delete(this.url+"/"+id);

}

}
