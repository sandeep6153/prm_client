import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { articleComponent }  from './app.article';
import { TextEditorComponent }  from './app.text-editor';
import { ArticleListComponent } from './app.article-list';
import { ArticlesComponent } from './app.articles';
import { FeedbackComponent } from './feedback';
import { LoginFormComponent } from './app.loginComponent';
import { LoginService } from './app.loginService';



@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ AppComponent ,articleComponent,TextEditorComponent,ArticleListComponent,ArticlesComponent,FeedbackComponent,LoginFormComponent],
  providers:  [LoginService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/