import { Component } from '@angular/core';
import { StartupService } from './Services/startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp';
  constructor(private _startupService : StartupService){
    _startupService.init()
  }
}
