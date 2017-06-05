System.register(['@angular/core', '@angular/platform-browser', '@angular/http', './app.component', './app.article', './app.text-editor', './app.article-list', './app.articles', './feedback', './app.loginComponent', './app.loginService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, http_1, app_component_1, app_article_1, app_text_editor_1, app_article_list_1, app_articles_1, feedback_1, app_loginComponent_1, app_loginService_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_article_1_1) {
                app_article_1 = app_article_1_1;
            },
            function (app_text_editor_1_1) {
                app_text_editor_1 = app_text_editor_1_1;
            },
            function (app_article_list_1_1) {
                app_article_list_1 = app_article_list_1_1;
            },
            function (app_articles_1_1) {
                app_articles_1 = app_articles_1_1;
            },
            function (feedback_1_1) {
                feedback_1 = feedback_1_1;
            },
            function (app_loginComponent_1_1) {
                app_loginComponent_1 = app_loginComponent_1_1;
            },
            function (app_loginService_1_1) {
                app_loginService_1 = app_loginService_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
                        declarations: [app_component_1.AppComponent, app_article_1.articleComponent, app_text_editor_1.TextEditorComponent, app_article_list_1.ArticleListComponent, app_articles_1.ArticlesComponent, feedback_1.FeedbackComponent, app_loginComponent_1.LoginFormComponent],
                        providers: [app_loginService_1.LoginService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.module.js.map