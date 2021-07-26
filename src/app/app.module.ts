import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { InfoTeaserComponent } from './Components/info-teaser/info-teaser.component';
import { HttpClientModule } from '@angular/common/http';
import { StartupService } from './Services/startup.service';
import { LanguageArticlesComponent } from './Components/language-articles/language-articles.component';
import { ArticleItemComponent } from './Components/article-item/article-item.component';
import { SnippetComponent } from './Components/snippet/snippet.component'

export function initializeApp(startupService : StartupService){
  return (): Promise<any> => { 
    return startupService.init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoTeaserComponent,
    LanguageArticlesComponent,
    ArticleItemComponent,
    SnippetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StartupService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [StartupService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
