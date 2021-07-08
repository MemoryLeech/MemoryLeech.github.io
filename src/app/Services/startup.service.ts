import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  
  //data : any

  constructor(private http: HttpClient) { }
  init(){
    console.log("Hello there")
    this.http.get('https://raw.githubusercontent.com/MemoryLeech/RepoController/main/repos.md', {responseType: 'text'})
      .subscribe(data => console.log(data))
  }
}
