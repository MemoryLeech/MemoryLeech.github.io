import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {
  filename : string | null = ""
  text = ""

  constructor(private _Activatedroute:ActivatedRoute, private http: HttpClient) {
    this.filename=this._Activatedroute.snapshot.paramMap.get("id");
  }

  ngOnInit(){
    this.init()
  }

  init(){ 
    this.http.get('https://raw.githubusercontent.com/MemoryLeech/arduino/main/' + this.filename, {responseType: 'text'})
      .subscribe(d => {
        this.text = d
        // let temp = d.split(' ')
        // this.articles = temp.slice(1, temp.length-2)
        // console.log(this.articles)
      })
  }

}
