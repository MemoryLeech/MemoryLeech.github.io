import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language-articles',
  templateUrl: './language-articles.component.html',
  styleUrls: ['./language-articles.component.scss']
})
export class LanguageArticlesComponent implements OnInit{
  
  language : string | null
  articles : string[] = [""]

  constructor(private _Activatedroute:ActivatedRoute, private http: HttpClient) {
    this.language=this._Activatedroute.snapshot.paramMap.get("id");
  }

  ngOnInit(){
    this.init()
  }

  init(){ 
    this.http.get('https://raw.githubusercontent.com/MemoryLeech/RepoController/main/' + this.language +'.md', {responseType: 'text'})
      .subscribe(d => {
        let temp = d.split(' ')
        this.articles = temp.slice(1, temp.length-2)
        console.log(this.articles)
      })
  }



  

  

  

}
