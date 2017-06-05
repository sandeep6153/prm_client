System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ArticleListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleListComponent = (function () {
                function ArticleListComponent() {
                    this.titleList = [];
                }
                ArticleListComponent.prototype.add = function (e) {
                    this.titleList.push(e.target.value);
                    e.target.value = "";
                };
                ArticleListComponent.prototype.remove = function (index) {
                    this.titleList.splice(index, 1);
                };
                ArticleListComponent = __decorate([
                    core_1.Component({
                        selector: 'article-list',
                        template: 'Type in textbox and press enter to add items:<input (keyup.enter)="add($event)"><articles *ngFor="let title of titleList;let i=index" [articleTitle]=title><button (click)="remove(i)">&#10006;</button></articles>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleListComponent);
                return ArticleListComponent;
            }());
            exports_1("ArticleListComponent", ArticleListComponent);
        }
    }
});
//# sourceMappingURL=app.article-list.js.map