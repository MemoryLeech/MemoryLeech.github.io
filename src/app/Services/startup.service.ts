import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  
  theme_data : string[] = [""]

  constructor(private http: HttpClient) { }
  init() {
    return new Promise<void>((resolve, reject) => {
      this.http.get('https://raw.githubusercontent.com/MemoryLeech/RepoController/main/repos.md', {responseType: 'text'})
          .subscribe(d => {
            let temp = d.split(' ')
            this.theme_data = temp.slice(1, temp.length-2)
            resolve()
          })
    })
  }

}
