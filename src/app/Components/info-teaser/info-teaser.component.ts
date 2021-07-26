import { Component, Input, OnInit } from '@angular/core';
import { StartupService } from 'src/app/Services/startup.service';

@Component({
  selector: 'app-info-teaser',
  templateUrl: './info-teaser.component.html',
  styleUrls: ['./info-teaser.component.scss']
})
export class InfoTeaserComponent implements OnInit {
  @Input() language : string = ""
  link : string = ""


  constructor(){
    
  }

  ngOnInit(){ 
    this.link = "https://raw.githubusercontent.com/MemoryLeech/" + this.language + "/main/logo.png"
  }


}
