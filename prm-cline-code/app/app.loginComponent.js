System.register(['@angular/core', './app.loginService'], function(exports_1, context_1) {
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
    var core_1, app_loginService_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_loginService_1_1) {
                app_loginService_1 = app_loginService_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(loginService) {
                    this.loginService = loginService;
                    this.name = 'Angular';
                    this.author = "Sandeep Sharma";
                    this.userData = "";
                }
                LoginFormComponent.prototype.checkUser = function () {
                    var _this = this;
                    this.loginService.checkUser().subscribe(function (data) { return _this.userData = data; });
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "Username:<input type=\"text\"/><br/>Password:<input type=\"password\"/><br/><input type=\"submit\" text=\"Login\" (click)=\"checkUser()\"/>\n {{userData}}\n  "
                    }), 
                    __metadata('design:paramtypes', [app_loginService_1.LoginService])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=app.loginComponent.js.map