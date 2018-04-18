webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".space{\r\n    margin-right: 20px;\r\n}\r\n\r\nimg.circle{\r\n    border-radius: 50%;\r\n}\r\n\r\n#input-field{\r\n\tmax-width: 400px;\r\n\theight: 150px;\r\n\tbackground: #fff; \r\n\tmargin: 25px auto;\r\n\tpadding: 25px;\r\n\ttext-align: center;\r\n}\r\n\r\nmat-form-field{\r\n\twidth: 300px;\r\n}\r\n\r\nmat-progress-spinner{\r\n\tmargin: 200px auto;\r\n}\r\n\r\n[mat-fab]{\r\n\tdisplay: block;\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tright: 20px;\r\n\tz-index: 99;\r\n}\r\n\r\n#tabs{\r\n\tbackground: #fff;\r\n}\r\n\r\n#events{\r\n\tmargin: 25px auto;\r\n\ttext-align: center;\r\n\tlist-style-type: none;\r\n}\r\n\r\n#events li{\r\n\tborder-bottom: 1px solid #cecece;\r\n}\r\n\r\n#repos{\r\n\tmargin: 25px;\r\n}\r\n\r\napp-followers{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n\t.hide-mobile{\r\n\t\t\tdisplay: none;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\r\n  <mat-toolbar-row>\r\n    <i class=\"fab fa-github\"></i>\r\n    <span class=\"space\"></span>\r\n    <span>Github API - User Data </span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div id=\"input-field\" class=\"mat-elevation-z4\" *ngIf=\"!loading && !userdata\">\r\n  <mat-form-field>\r\n    <input placeholder=\"Enter a github user name\" [(ngModel)]=\"username\" (keydown)=\"checkEnter($event)\" matInput>\r\n    <span matPrefix>\r\n    \t<i class=\"fab fa-github\"></i> &nbsp;\r\n    </span>\r\n  </mat-form-field>\r\n  <div>\r\n\t\t<button (click)=\"fetchAll()\" mat-raised-button color=\"primary\">Search</button>\r\n\t</div>\r\n</div>\r\n\r\n<mat-progress-spinner *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-spinner>\r\n\r\n<div class=\"container\" *ngIf=\"userdata && !loading\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<mat-card>\r\n\t\t\t  <img mat-card-image src=\"{{userdata.avatar_url}}\"  alt=\"Profile picture\">\r\n\t\t\t  <mat-card-content>\r\n\t\t\t\t  <mat-list-item>\r\n\t\t\t\t    <mat-card-title>{{userdata.name}}</mat-card-title>\r\n\t\t\t\t    <mat-card-subtitle>@{{userdata.login}}</mat-card-subtitle>\r\n\t\t\t\t  </mat-list-item>\r\n\t\t\t    <mat-list sstyle=\"display:none\">\r\n\t\t\t      <mat-divider></mat-divider>\r\n\t\t\t      <mat-list-item *ngIf=\"userdata.location\">\r\n\t\t\t        <mat-icon mat-list-icon>place</mat-icon>\r\n\t\t\t        <p mat-line> {{userdata.location}} </p>\r\n\t\t\t      </mat-list-item>\r\n\t\t\t      <mat-list-item>\r\n\t\t\t        <mat-icon mat-list-icon>date_range</mat-icon>\r\n\t\t\t        <p mat-line> Joined on {{since}} </p>\r\n\t\t\t      </mat-list-item>\r\n\t\t\t      <mat-list-item *ngIf=\"userdata.blog\">\r\n\t\t\t        <mat-icon mat-list-icon>link</mat-icon>\r\n\t\t\t        <p mat-line> <a href=\"{{userdata.blog}}\">{{userdata.blog}}</a> </p>\r\n\t\t\t      </mat-list-item>\r\n\t\t\t      <mat-list-item *ngIf=\"userdata.mail\">\r\n\t\t\t        <mat-icon mat-list-icon>mail_outline</mat-icon>\r\n\t\t\t        <p mat-line> {{userdata.mail}} </p>\r\n\t\t\t      </mat-list-item>\r\n\t\t\t    </mat-list>\r\n\t\t\t  </mat-card-content>\r\n\t\t\t</mat-card>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-8 col-sm-12 mat-elevation-z2\" id=\"tabs\">\r\n\t\t\t<mat-tab-group>\r\n\t\t\t  <mat-tab label=\"Repositories\">\r\n\t\t\t    <ng-template mat-tab-label>\r\n\t\t\t      <i class=\"repo\"></i> <span class=\"hide-mobile\">Repositories <mat-chip>{{userdata.public_repos}}</mat-chip></span> \r\n\t\t\t    </ng-template> \r\n\t\t\t    <mat-chip-list></mat-chip-list>\r\n\t\t\t    <div *ngIf=\"repositories\" id=\"repos\">\r\n\t\t\t      <div *ngFor=\"let repo of repositories\"><i class=\"repo\"></i> <a href=\"{{repo.html_url}}\" target=\"_blank\">{{repo.name}}</a></div>\r\n\t\t\t    </div>\r\n\t\t\t  </mat-tab>\r\n\r\n\t\t\t  <mat-tab label=\"Following\">\r\n\t\t\t    <ng-template mat-tab-label>\r\n\t\t\t\t\t\t<mat-icon>group</mat-icon> <span class=\"hide-mobile\">Following <mat-chip>{{userdata.following}}</mat-chip></span>\r\n\t\t\t    </ng-template>    \r\n\t\t\t    <app-followers [followers]=\"following\" (newSearch)=\"newSearch($event)\"></app-followers>\r\n\t\t\t  </mat-tab>\r\n\r\n\t\t\t  <mat-tab label=\"Followers\">\r\n\t\t\t    <ng-template mat-tab-label>\r\n\t\t\t\t\t\t<mat-icon>group</mat-icon> <span class=\"hide-mobile\">Followers <mat-chip>{{userdata.followers}}</mat-chip></span>\r\n\t\t\t    </ng-template>    \r\n\t\t\t    <app-followers [followers]=\"followers\" (newSearch)=\"newSearch($event)\"></app-followers>\r\n\t\t\t  </mat-tab>\r\n\r\n\t\t\t  <mat-tab label=\"Events\" *ngIf=\"events\">\r\n\t\t\t    <ng-template mat-tab-label>\r\n\t\t\t\t\t\t<mat-icon>event</mat-icon> <span class=\"hide-mobile\">Events <mat-chip>{{events.length}}</mat-chip></span>\r\n\t\t\t    </ng-template>    \r\n\t\t\t    <ul id=\"events\">\r\n\t\t\t      <li *ngFor=\"let e of events\">\r\n\t\t\t\t\t\t\t<a href=\"{{e.repo.url.replace('api.','').replace('repos/', '')}}\" target=\"_blank\">\r\n\t\t\t          {{e.actor.login}} created a \r\n\t\t\t          {{e.type}} to: \r\n\t\t\t          {{e.repo.name}} on: \r\n\t\t\t          {{e.created_at | date : 'dd/MM/y H:m'}}\r\n\t\t\t        </a>\r\n\t\t\t      </li>\r\n\t\t\t    </ul>\r\n\t\t\t  </mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<button mat-fab *ngIf=\"userdata && !loading\" (click)=\"newSearch()\">\r\n\t<mat-icon aria-label=\"Search another user\">search</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.api = 'https://api.github.com';
    }
    Object.defineProperty(AppComponent.prototype, "since", {
        get: function () {
            return (new Date(this.userdata['created_at'])).toLocaleDateString();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.fetchAll = function () {
        clearTimeout(this.debounce);
        this.fetchData('userdata', null);
        this.fetchData('repositories', 'repos');
        this.fetchData('followers', 'followers');
        this.fetchData('following', 'following');
        this.fetchData('events', 'events');
    };
    AppComponent.prototype.fetchData = function (property, resource) {
        var _this = this;
        if (property === void 0) { property = 'userdata'; }
        if (!this.username) {
            this.openSnackBar("Please fill the input");
            return false;
        }
        this.loading = true;
        var url = this.api + "/users/" + this.username;
        url = (resource) ? url + "/" + resource : url;
        this.http.get(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            _this[property] = data;
            _this.loading = false;
        }, function (res) {
            _this.loading = false;
            if (property == 'userdata') {
                if (res.status == 404) {
                    _this.openSnackBar("User name Not found!");
                }
                else if (res.status == 403) {
                    _this.openSnackBar("Github API request rate limit exceeded for your IP address. Try again later");
                }
            }
        });
    };
    AppComponent.prototype.checkEnter = function (e) {
        var _this = this;
        if (e.keyCode === 13) {
            return this.fetchAll();
        }
        clearTimeout(this.debounce);
        this.debounce = setTimeout(function () {
            _this.fetchAll();
        }, 2500);
    };
    AppComponent.prototype.newSearch = function (event) {
        this.userdata = null;
        if (event) {
            this.username = event;
            this.fetchAll();
        }
    };
    AppComponent.prototype.openSnackBar = function (msg) {
        this.snackBar.open(msg, 'OK', {
            duration: 4000
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatSnackBar */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followers_followers_component__ = __webpack_require__("./src/app/followers/followers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__followers_followers_component__["a" /* FollowersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/followers/followers.component.css":
/***/ (function(module, exports) {

module.exports = "img{\r\n\tmax-width:50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%\r\n}\r\n.card{\r\n\tdisplay: inline-block;\r\n\tborder-radius: 5px;\r\n\ttext-align: center;\r\n\tpadding: 15px;\r\n\tmargin: 6px;\r\n\t-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);\r\n\t        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);\r\n\toverflow: hidden;\t\r\n\twidth: 130px;\r\n\theight: 100px;\r\n  background: #fff;\r\n  cursor: pointer;\r\n}\r\n.card a {\r\n\ttext-decoration: none;\r\n\tfont-style: normal;\r\n\tfont-family: sans-serif;\r\n\tcolor: black;\r\n}\r\n.card a:visited{\r\n\tcolor: black;\r\n}\r\n.card .name{\r\n  font-size: 14px;\r\n\tmargin-top: 5px;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\twidth: 100px;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n"

/***/ }),

/***/ "./src/app/followers/followers.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let f of followers ? followers : []\" class=\"card\" (click)=\"newSearch.emit(f.login)\">\r\n\t<img src=\"{{f.avatar_url}}\">\r\n\t<div class=\"name\">{{f.login}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/followers/followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowersComponent = /** @class */ (function () {
    function FollowersComponent() {
        this.followers = [];
        this.newSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], FollowersComponent.prototype, "followers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], FollowersComponent.prototype, "newSearch", void 0);
    FollowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-followers',
            template: __webpack_require__("./src/app/followers/followers.component.html"),
            styles: [__webpack_require__("./src/app/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSnackBarModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map