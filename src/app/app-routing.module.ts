import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LanguageArticlesComponent } from './Components/language-articles/language-articles.component';
import { SnippetComponent } from './Components/snippet/snippet.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'language/:id',
    component : LanguageArticlesComponent,
  },
  {path : 'snippet/:id', 
  component : SnippetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
