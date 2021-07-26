import { Component, OnInit } from '@angular/core';
import { StartupService } from 'src/app/Services/startup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content : string[] = [""]

  constructor(public startupService : StartupService) {
    this.content = startupService.theme_data
    
  }

  ngOnInit(): void {
    
  }

}
