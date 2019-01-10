(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blazey';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _genre_genre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genre/genre.component */ "./src/app/genre/genre.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sub-topic/sub-topic.component */ "./src/app/sub-topic/sub-topic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var route = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'genre', component: _genre_genre_component__WEBPACK_IMPORTED_MODULE_6__["GenreComponent"] },
    { path: 'genre/topic/:id', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_14__["TopicComponent"] },
    { path: 'genre/topic/:id/subtopic/:id1', component: _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_16__["SubTopicComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _genre_genre_component__WEBPACK_IMPORTED_MODULE_6__["GenreComponent"],
                _topic_topic_component__WEBPACK_IMPORTED_MODULE_14__["TopicComponent"],
                _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_16__["SubTopicComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(route), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/genre/genre.component.css":
/*!*******************************************!*\
  !*** ./src/app/genre/genre.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Pacifico|Patrick+Hand');\n\n\n.loader{\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n    position: relative;\n    margin-left: 43%;\n    margin-top: 20%;\n}\n\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n\n.example-full-width {\n    width: 100%;\n}\n\n\n.center{\n    text-align: center;\n    position: relative;\n    left: 24%;\n}\n\n\n.center2{\n    text-align: center;\n    position: relative;\n    left: 35%;\n}\n\n\n.center1{\n    text-align: center;\n    position: relative;\n    left: 38%;\n    top:50px;\n}\n\n\n.center3{\n    text-align: center;\n    position: relative;\n    left: 4%;\n    top: -15px;\n}\n\n\n.card{\n   height: 350px;\n   width:400px;\n   float:left;\n   border-radius: 14px;\n   margin-left: 70px;\n   margin-bottom: 127px;\n   box-shadow: 4px 4px 19px #9e8181;\n   margin-right: 60px;\n   margin-top: -23px;\n}\n\n\n.card:hover{\n    cursor: pointer !important;\n}\n\n\n.toolbar{\n\tposition: relative !important;\n    bottom: 56px !important;\n\n}\n\n\n.container2{\n\tposition: relative;\n\ttop: 142px;\n    left: 138px;\n\tmargin-top: 60px;\n\tmax-width: 92%;\n}\n\n\n.description{\n    text-align: center;\n    /* margin-left: 87px; */\n    margin-top: 12%;\n    font-size: 48px;\n    font-family: 'Patrick Hand', cursive;\n}\n\n\nmat-toolbar{\n    background: #ff4081;\n    height: auto;\n    word-wrap: break-word;\n    color: #fff;\n    padding: 14px;\n}\n\n\n.openForm{\n    bottom: 28px;\n    position: relative;\n    float: right;\n    margin-right: 71px;\n    outline:none;\n}\n\n\n.formButtons{\n    margin-top: 12px;\n    float: right;\n    margin-left: 22px;\n    font-size: 20px;\n}\n\n\n.delete{\n    position: relative;\n    left: calc(100% - 28px) !important;\n    top: -27px;\n    outline: none;\n    z-index: 1000;    left: -4%;\n}\n\n\n@media screen and (max-width: 800px) {\n    .container2{\n        left: -4%;\n    }\n    .search{\n        width:30px;\n    }\n}"

/***/ }),

/***/ "./src/app/genre/genre.component.html":
/*!********************************************!*\
  !*** ./src/app/genre/genre.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<img class=\"loader\" *ngIf=\"!(genreArray.length>0)\" src=\"https://i.gifer.com/origin/7e/7ee3cfe72db589bdb95ad0f9edbaf6d4_w200.webp\">\n<div *ngIf=\"genreArray.length>0\">\n\n<h1 style=\" font-family: 'Patrick Hand', cursive;\ntext-align: center;\">GENRES</h1>\n\n<form class=\"example-form center1\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Search\" class=\"search\">\n  </mat-form-field>\n</form>\n<button mat-fab color=\"accent\" class=\"openForm\" mat-raised-button (click)=\"addNew(openForm)\"><i class=\"fas fa-plus\"></i></button>\n\n<p class=\"description\" *ngIf=\"genreArray.length < 1\">Nothing to show dude!</p>\n<div class=\"container2\" [@fadeIn]=\"genreArray.length\" *ngIf=\"genreArray.length > 0\">\n  <div class=\"card\" *ngFor=\"let genre of genreArray;let i = index\" (click)=\"openTopic(i)\">\n    <button *ngIf=\"genre.topics.length<1\" mat-fab color=\"accent\" class=\"delete\" mat-raised-button (click)=\"delete(i)\"><i class=\"fa fa-times\"></i></button>\n    <div class=\"description\"><span>{{ genre.genreName }} </span></div>\n  </div>\n</div>\n</div>\n<ng-template #openForm let-c=\"close\" let-d=\"dismiss\">\n  <mat-toolbar>\n    <span class=\"title center2\">Add new Term</span>\n  </mat-toolbar><br><br>\n  <form class=\"example-form center3\" [formGroup]=\"addForm\" (ngSubmit)=\"add()\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Title\" formControlName=\"genreName\" required>\n    </mat-form-field>\n    <span class=\"formButtons\" mat-raised-button (click)=\"Cross_click()\">Cancel</span>\n    <button class=\"formButtons\" type=\"submit\" mat-raised-button>Add</button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/genre/genre.component.ts":
/*!******************************************!*\
  !*** ./src/app/genre/genre.component.ts ***!
  \******************************************/
/*! exports provided: GenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreComponent", function() { return GenreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenreComponent = /** @class */ (function () {
    function GenreComponent(modalService, _baseService, router, snackBar) {
        this.modalService = modalService;
        this._baseService = _baseService;
        this.router = router;
        this.snackBar = snackBar;
        this.genreArray = [];
        this.height = '500px';
        this.width = '600px';
        this.height1 = '600px';
        // Reactive form formGroup data  
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            genreName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    GenreComponent.prototype.ngOnInit = function () {
        this.getGenres();
    };
    GenreComponent.prototype.getGenres = function () {
        var _this = this;
        this._baseService.getGenre().subscribe(function (res) {
            _this.genreArray = res.data;
            console.log('res', res.data);
        });
    };
    GenreComponent.prototype.openTopic = function (i) {
        this.currentId = this.genreArray[i]._id;
        localStorage.setItem('currentId', this.currentId);
        console.log(this.currentId);
        this.router.navigate(['genre/topic/' + this.currentId]);
    };
    GenreComponent.prototype.addNew = function (content) {
        var dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.modalService.open(content, {
            height: this.height1,
            width: this.width,
            panelClass: 'custom-modalbox'
        });
    };
    GenreComponent.prototype.Cross_click = function () {
        this.modalService.closeAll();
    };
    GenreComponent.prototype.add = function () {
        var _this = this;
        this._baseService.postGenre(this.addForm.value).subscribe(function (data) {
            console.log('post data is :' + data);
            _this.snackBar.open('The new Genre has been created!', '', {
                duration: 3000
            });
        });
        console.log(this.addForm.value);
        this.getGenres();
        this.addForm.reset();
        //this.genreArray.push(this.addForm.value);
        this.Cross_click();
    };
    GenreComponent.prototype.delete = function (index) {
        var _this = this;
        console.log(this.genreArray[index]._id);
        this._baseService.deleteGenre(this.genreArray[index]._id).subscribe(function (result) {
            console.log(result);
            _this.snackBar.open('The Genre has been deleted!', '', {
                duration: 3000
            });
        });
        this.genreArray.splice(index, 1);
        console.log('deleted', index);
    };
    GenreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genre',
            template: __webpack_require__(/*! ./genre.component.html */ "./src/app/genre/genre.component.html"),
            styles: [__webpack_require__(/*! ./genre.component.css */ "./src/app/genre/genre.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('*=>*', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translate(0,-20px)'
                        }), {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('400ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 1,
                                transform: 'translate(0,0)'
                            }))
                        ]), {
                            optional: true
                        }),
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GenreComponent);
    return GenreComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div class=\"container\">\n\t\t<h1>Welcome</h1>\n\t\t\n\t\t<form class=\"form\">\n\t\t\t<input type=\"text\" placeholder=\"Username\" readonly onfocus=\"this.removeAttribute('readonly')\">\n\t\t\t<input type=\"password\" placeholder=\"Password\" readonly onfocus=\"this.removeAttribute('readonly')\">\n      <button type=\"submit\" id=\"login-button\" (click)=\"login()\">Login</button><br><br>\n      <button type=\"submit\" routerLink=\"signup\" id=\"signup-button\">SignUp</button>\n\t\t</form>\n\t</div>\n\t\n\t<ul class=\"bg-bubbles\">\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.less":
/*!********************************************!*\
  !*** ./src/app/login/login.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  font-weight: 300;\n}\nbody ::-webkit-input-placeholder {\n  /* WebKit browsers */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  font-weight: 300;\n}\nbody :-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\nbody ::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\nbody :-ms-input-placeholder {\n  /* Internet Explorer 10+ */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  font-weight: 300;\n}\n#wrapper {\n  background: #50a3a2;\n  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\n  position: absolute;\n  top: -1%;\n  left: 0;\n  width: 100%;\n  height: 101%;\n  overflow: hidden;\n}\n#wrapper.form-success .container h1 {\n  -webkit-transform: translateY(85px);\n          transform: translateY(85px);\n}\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 313px 0;\n  height: 400px;\n  text-align: center;\n}\n.container h1 {\n  font-size: 40px;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-put;\n  font-weight: 200;\n}\nform {\n  padding: 20px 0;\n  position: relative;\n  z-index: 2;\n}\nform input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 477px;\n  border-radius: 3px;\n  padding: 19px 15px;\n  margin: 12px auto 22px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: #0a0a0a;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\nform input:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n}\nform input:focus {\n  background-color: white;\n  width: 300px;\n  color: #53e3a6;\n}\nform #login-button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background-color: #faf6f6;\n  border: 0;\n  padding: 10px 15px;\n  margin-bottom: -10px;\n  color: #1a1717;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\nform #login-button:hover {\n  background-color: #f5f7f9;\n}\nform #signup-button {\n  position: relative;\n  float: right;\n  left: 100%;\n  bottom: 582px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 0;\n  padding: 10px 15px;\n  color: #1a1717;\n  border-radius: 3px;\n  width: 155px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\nform #signup-button:hover {\n  background-color: #f5f7f9;\n}\n.bg-bubbles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.bg-bubbles li {\n  position: absolute;\n  list-style: none;\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-color: rgba(255, 255, 255, 0.15);\n  bottom: -160px;\n  -webkit-animation: square 25s infinite;\n  animation: square 25s infinite;\n  transition-timing-function: linear;\n}\n.bg-bubbles li:nth-child(1) {\n  left: 10%;\n}\n.bg-bubbles li:nth-child(2) {\n  left: 20%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 17s;\n          animation-duration: 17s;\n}\n.bg-bubbles li:nth-child(3) {\n  left: 25%;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.bg-bubbles li:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-duration: 22s;\n          animation-duration: 22s;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.bg-bubbles li:nth-child(5) {\n  left: 70%;\n}\n.bg-bubbles li:nth-child(6) {\n  left: 80%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.bg-bubbles li:nth-child(7) {\n  left: 32%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.bg-bubbles li:nth-child(8) {\n  left: 55%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n}\n.bg-bubbles li:nth-child(9) {\n  left: 25%;\n  width: 10px;\n  height: 10px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles li:nth-child(10) {\n  left: 90%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 11s;\n          animation-delay: 11s;\n}\n@-webkit-keyframes square {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-700px) rotate(600deg);\n            transform: translateY(-700px) rotate(600deg);\n  }\n}\n@keyframes square {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-700px) rotate(600deg);\n            transform: translateY(-700px) rotate(600deg);\n  }\n}\n@media screen and (max-width: 800px) {\n  #signup-button {\n    bottom: 171% !important;\n    padding: 10px 23px !important;\n    position: absolute !important;\n    left: 201px !important;\n    background: rgba(8, 9, 11, 0.2);\n    font-size: 16px !important;\n  }\n  form input {\n    width: 297px;\n    padding: 15px 15px;\n  }\n  form {\n    bottom: 127px;\n  }\n  .container h1 {\n    position: relative;\n    bottom: 130px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.getElementById('login-button').addEventListener('click', function (event) {
            event.preventDefault();
            //const fade = document.getElementsByTagName('form');
            //fade(fade);
            document.getElementById('wrapper').classList.add('form-success');
            var fade = document.getElementsByTagName('form');
            //  fade(fade);-})
        });
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['genre']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/login/login.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
    }
    BaseService.prototype.getGenre = function () {
        return this.http.get('catalog/genre/create');
    };
    BaseService.prototype.postGenre = function (data) {
        return this.http.post('catalog/genre/create', data);
    };
    BaseService.prototype.deleteGenre = function (id) {
        return this.http.delete('catalog/genre/delete/' + id);
    };
    BaseService.prototype.getTopic = function (id) {
        return this.http.get('catalog/topic/create', { params: { 'id': id } });
    };
    BaseService.prototype.postTopic = function (data, id) {
        return this.http.post('catalog/topic/create/' + id, data);
    };
    BaseService.prototype.deleteTopic = function (id) {
        return this.http.delete('catalog/topic/delete/' + id);
    };
    BaseService.prototype.getSubTopic = function (id1) {
        return this.http.get('catalog/subtopic/create', { params: { 'id1': id1 } });
    };
    BaseService.prototype.postSubTopic = function (data, id1) {
        this.currentGenreId = localStorage.getItem('currentId');
        return this.http.post('catalog/subtopic/create/' + this.currentGenreId + '/' + id1, data);
    };
    BaseService.prototype.deleteSubTopic = function (id) {
        return this.http.delete('catalog/subtopic/delete/' + id);
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div class=\"container\">\n\t\t<h1>Welcome</h1>\n\t\t\n\t\t<form class=\"form\">\n\t\t\t<input type=\"text\" placeholder=\"Username\" readonly onfocus=\"this.removeAttribute('readonly')\">\n\t\t\t<input type=\"password\" placeholder=\"Password\" readonly onfocus=\"this.removeAttribute('readonly')\">\n\t\t\t<button type=\"submit\" id=\"login-button\">Signup</button>\n\t\t</form>\n\t</div>\n\t\n\t<ul class=\"bg-bubbles\">\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.less":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  font-weight: 300;\n}\nbody ::-webkit-input-placeholder {\n  /* WebKit browsers */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  font-weight: 300;\n}\nbody :-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\nbody ::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\nbody :-ms-input-placeholder {\n  /* Internet Explorer 10+ */\n  font-family: 'Source Sans Pro', sans-serif;\n  color: white;\n  font-weight: 300;\n}\n#wrapper {\n  background: #50a3a2;\n  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\n  position: absolute;\n  top: -1%;\n  left: 0;\n  width: 100%;\n  height: 101%;\n  overflow: hidden;\n}\n#wrapper.form-success .container h1 {\n  -webkit-transform: translateY(85px);\n          transform: translateY(85px);\n}\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 313px 0;\n  height: 400px;\n  text-align: center;\n}\n.container h1 {\n  font-size: 40px;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-put;\n  font-weight: 200;\n}\nform {\n  padding: 20px 0;\n  position: relative;\n  z-index: 2;\n}\nform input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 477px;\n  border-radius: 3px;\n  padding: 19px 15px;\n  margin: 12px auto 22px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: #0a0a0a;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\nform input:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n}\nform input:focus {\n  background-color: white;\n  width: 300px;\n  color: #53e3a6;\n}\nform button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background-color: #faf6f6;\n  border: 0;\n  padding: 10px 15px;\n  color: #1a1717;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\nform button:hover {\n  background-color: #f5f7f9;\n}\n.bg-bubbles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.bg-bubbles li {\n  position: absolute;\n  list-style: none;\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-color: rgba(255, 255, 255, 0.15);\n  bottom: -160px;\n  -webkit-animation: square 25s infinite;\n  animation: square 25s infinite;\n  transition-timing-function: linear;\n}\n.bg-bubbles li:nth-child(1) {\n  left: 10%;\n}\n.bg-bubbles li:nth-child(2) {\n  left: 20%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 17s;\n          animation-duration: 17s;\n}\n.bg-bubbles li:nth-child(3) {\n  left: 25%;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.bg-bubbles li:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-duration: 22s;\n          animation-duration: 22s;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.bg-bubbles li:nth-child(5) {\n  left: 70%;\n}\n.bg-bubbles li:nth-child(6) {\n  left: 80%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.bg-bubbles li:nth-child(7) {\n  left: 32%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.bg-bubbles li:nth-child(8) {\n  left: 55%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n}\n.bg-bubbles li:nth-child(9) {\n  left: 25%;\n  width: 10px;\n  height: 10px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles li:nth-child(10) {\n  left: 90%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 11s;\n          animation-delay: 11s;\n}\n@-webkit-keyframes square {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-700px) rotate(600deg);\n            transform: translateY(-700px) rotate(600deg);\n  }\n}\n@keyframes square {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-700px) rotate(600deg);\n            transform: translateY(-700px) rotate(600deg);\n  }\n}\n@media screen and (max-width: 800px) {\n  form input {\n    width: 297px;\n    padding: 15px 15px;\n  }\n  form {\n    bottom: 127px;\n  }\n  .container h1 {\n    position: relative;\n    bottom: 130px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.less */ "./src/app/signup/signup.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.css":
/*!***************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Pacifico|Patrick+Hand');\n\n.loader{\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n    position: relative;\n    margin-left: 43%;\n    margin-top: 20%;\n}\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n\n.center{\n    text-align: center;\n    position: relative;\n    display: block;\n    max-width: 429px;\n    word-wrap: break-word;\n    white-space: normal;\n}\n\n.center2{\n    position: relative;\n    white-space: normal;\n}\n\n.center1{\n    text-align: center;\n    position: relative;\n    left: 38%;\n    top:50px;\n}\n\n.center3{\n    text-align: center;\n    position: relative;\n    left: 4%;\n    top: -15px;\n}\n\n.card{\n   height: 350px;\n   width:400px;\n   float:left;\n   border-radius: 14px;\n   margin-left: 70px;\n   margin-bottom: 127px;\n   box-shadow: 4px 4px 19px #9e8181;\n   margin-right: 60px;\n   margin-top: -23px;\n   font-family: 'Patrick Hand', cursive;\n}\n\n.card:hover{\n    cursor: pointer !important;\n}\n\n.toolbar{\n\tposition: relative !important;\n    bottom: 56px !important;\n\n}\n\n.container2{\n\tposition: relative;\n\ttop: 142px;\n    left: 138px;\n\tmargin-top: 60px;\n\tmax-width: 92%;\n}\n\nmat-toolbar{\n    background: #ff4081;\n    height: auto;\n    word-wrap: break-word;\n    color: #fff;\n    padding: 14px;\n}\n\n.description2{\n    margin:30px;\n    font-size: 26px;\n    font-family: 'Patrick Hand', cursive;\n}\n\n.description1{\n    margin:30px;\n    font-size: 20px;\n    font-family: 'Patrick Hand', cursive;\n}\n\n.description{\n    text-align: center;\n    /* margin-left: 87px; */\n    margin-top: 12%;\n    font-size: 48px;\n    font-family: 'Patrick Hand', cursive;\n}\n\n.openForm{\n    bottom: 28px;\n    position: relative;\n    float: right;\n    margin-right: 71px;\n    outline:none;\n}\n\n.link{\n    font-family: 'Patrick Hand', cursive;\n    text-decoration: none;\n    color:blue;\n}\n\n.link:hover{\n    text-decoration: none;\n    cursor: pointer;\n    color:red;\n\n}\n\ntd span {\n    font-size: 19px;\n}\n\n.genreValue{\n    display: none;\n}\n\n.addlink{\n   font-size: 10px;\n   float:right;\n   cursor: pointer;\n}\n\n.formButtons{\n    margin-top: 12px;\n    float: right;\n    margin-left: 22px;\n    font-size: 20px;\n}\n\n.delete{\n    position: relative;\n    left: calc(100% - 28px);\n    top: -27px;\n    outline: none;\n    z-index: 1000;\n}\n\n@media screen and (max-width: 800px) {\n\n}"

/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.html":
/*!****************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loader\" *ngIf=\"!currentTopic\" src=\"https://i.gifer.com/origin/7e/7ee3cfe72db589bdb95ad0f9edbaf6d4_w200.webp\">\n<div *ngIf=\"currentTopic.length>0\">\n<h1 style=\" font-family: 'Patrick Hand', cursive;\ntext-align: center;\">SUB-TOPICS</h1>\n\n\n<h2 style=\" font-family: 'Patrick Hand', cursive;\ntext-align: center;\">IN {{ currentTopic | uppercase }}</h2>\n\n<form class=\"example-form center1\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Search\">\n  </mat-form-field>\n</form>\n<button mat-fab color=\"accent\" class=\"openForm\" mat-raised-button (click)=\"addNew(openForm)\"><i class=\"fas fa-plus\"></i></button>\n\n<p class=\"description\" *ngIf=\"subTopicArray.length < 1\">Nothing to show dude!</p>\n<div class=\"container2\" [@fadeIn]=\"subTopicArray.length\">\n  <div class=\"card\" *ngFor=\"let topic of subTopicArray;let i = index\" (click)=\"open(openModal,i)\">\n      <button mat-fab color=\"accent\" class=\"delete\" mat-raised-button (click)=\"delete(i)\"><i class=\"fa fa-times\"></i></button>\n      <mat-toolbar color=\"accent\" class=\"toolbar\">\n        <span class=\"title center\">{{ i+1 }}. {{ topic.subTopic }}</span>\n      </mat-toolbar>\n        \n      <div class=\"description1\">\n        <div *ngIf=\"topic.content.length <= 0\" >\n            <div *ngFor=\"let linkData of topic.linkData;let i=index\">\n  \n                <table>\n                    <tr>\n                      <td><span>{{i+1}}.</span></td>\n                      <td><a target=\"_blank\" [href]=\"linkData.link\" *ngIf=\"linkData.linkCaption\" class=\"link\">{{ linkData.linkCaption\n                          }}</a>\n                        <a [href]=\"linkData.link\" *ngIf=\"!linkData.linkCaption\" class=\"link\">{{ linkData.link }}</a></td>\n                    </tr>\n                  </table>\n              </div>  \n            </div>\n        <span>{{ topic.content.substr(0,140) }} <p *ngIf=\"topic.content.length>140\"\n            style=\"color:red\"> ... Read more </p> </span></div>\n</div></div>\n\n</div>\n\n\n<ng-template #openModal let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <mat-toolbar>\n      <span class=\"title center2\">{{ currentOpened.topicName }}</span>\n    </mat-toolbar>\n  </div><br>\n  <p style=\"text-align: center;\" *ngIf=\"currentOpened.linkData.length>-1\">Important Links : </p><br>\n  <div class=\"modal-body\"  *ngFor=\"let linkData of currentOpened.linkData;let i=index\">\n      \n    <table *ngIf=\"currentOpened.linkData.length>-1\">\n      <tr>\n      <td><span>{{i+1}}.</span></td>\n      <td><a [href]=\"linkData.link\" *ngIf=\"linkData.linkCaption\" class=\"link\">{{ linkData.linkCaption }}</a>\n      <a target=\"_blank\" [href]=\"linkData.link\" *ngIf=\"!linkData.linkCaption\" class=\"link\">{{ linkData.link }}</a></td>\n    </tr>\n    </table>\n  </div>\n  <p style=\"text-align: center;\">Description</p><br>\n  <div class=\"modal-body\">\n    <div class=\"description2\"><span>{{ currentOpened.content }}</span></div>\n  </div>\n\n</ng-template>\n\n<ng-template #openForm let-c=\"close\" let-d=\"dismiss\">\n  <mat-toolbar>\n    <span class=\"title center2\">Add new sub-topic</span>\n  </mat-toolbar><br><br>\n  <form class=\"example-form center3\" [formGroup]=\"subTopicForm\" (ngSubmit)=\"add()\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Topic\" formControlName=\"subTopic\">\n    </mat-form-field>\n    <div formArrayName=\"linkData\"  *ngFor=\"let item of subTopicForm.get('linkData').controls; let i = index;\">\n        <div [formGroupName]=\"i\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Link\" rows=\"4\" formControlName=\"link\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"LinkCaption\" rows=\"4\" formControlName=\"linkCaption\">\n          </mat-form-field>\n\n        </div>\n      </div>\n      <span (click)=\"addItem()\" class=\"addLink\" style=\"font-size: 13px;float:right;cursor: pointer;\"><i class=\"fas fa-plus\"\n          style=\"font-size: 10px;\"></i> Add more Links</span>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Description\" rows=\"4\" formControlName=\"content\"></textarea>\n      </mat-form-field>\n    <button class=\"formButtons\" mat-raised-button (click)=\"Cross_click()\">Cancel</button>\n    <button class=\"formButtons\" type=\"submit\" mat-raised-button>Add</button>\n  </form>\n\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.ts ***!
  \**************************************************/
/*! exports provided: SubTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTopicComponent", function() { return SubTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubTopicComponent = /** @class */ (function () {
    function SubTopicComponent(modalService, _baseService, router, formBuilder, route, snackBar) {
        this.modalService = modalService;
        this._baseService = _baseService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.snackBar = snackBar;
        this.subTopicArray = [];
        this.currentOpened = {};
        this.height = '700px';
        this.width = '800px';
        this.height1 = '600px';
        this.width1 = '600px';
    }
    SubTopicComponent.prototype.ngOnInit = function () {
        this.subTopicForm = this.formBuilder.group({
            subTopic: '',
            content: '',
            linkData: this.formBuilder.array([this.createItem()])
        });
        this.id = this.router.snapshot.params.id1;
        this.getSubTopics(this.id);
    };
    SubTopicComponent.prototype.getSubTopics = function (id) {
        var _this = this;
        this._baseService.getSubTopic(id).subscribe(function (res) {
            _this.currentTopic = res.topic;
            console.log('res out', res);
            if (res.subtopics)
                _this.subTopicArray = res.subtopics;
            console.log('res', res.subtopics);
        });
    };
    SubTopicComponent.prototype.open = function (content, i) {
        //i = this.subTopicArray.length - 1;
        this.currentOpened = this.subTopicArray[i];
        console.log(this.currentOpened);
        var dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.modalService.open(content, {
            height: this.height,
            width: this.width,
            panelClass: 'custom-modalbox'
        });
    };
    SubTopicComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            link: '',
            linkCaption: ''
        });
    };
    SubTopicComponent.prototype.addItem = function () {
        this.linkData = this.subTopicForm.get('linkData');
        console.log(this.linkData);
        this.linkData.push(this.createItem());
    };
    SubTopicComponent.prototype.addNew = function (content) {
        var dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.modalService.open(content, {
            height: this.height1,
            width: this.width1,
            panelClass: 'custom-modalbox'
        });
    };
    SubTopicComponent.prototype.Cross_click = function () {
        this.modalService.closeAll();
    };
    // Reactive form formGroup data  
    SubTopicComponent.prototype.add = function () {
        var _this = this;
        this._baseService.postSubTopic(this.subTopicForm.value, this.id).subscribe(function (data) {
            console.log('post data is :' + data);
            _this.snackBar.open('The new sub-topic has been created!', '', {
                duration: 3000
            });
        });
        console.log(this.subTopicForm.value);
        this.getSubTopics(this.id);
        this.subTopicForm.reset();
        //this.genreArray.push(this.subTopicForm.value);
        this.Cross_click();
    };
    SubTopicComponent.prototype.delete = function (index) {
        var _this = this;
        this._baseService.deleteSubTopic(this.subTopicArray[index]._id).subscribe(function (result) {
            console.log(result);
            _this.snackBar.open('The sub-topic has been deleted!', '', {
                duration: 3000
            });
        });
        this.subTopicArray.splice(index, 1);
        console.log('deleted', index);
    };
    SubTopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-topic',
            template: __webpack_require__(/*! ./sub-topic.component.html */ "./src/app/sub-topic/sub-topic.component.html"),
            styles: [__webpack_require__(/*! ./sub-topic.component.css */ "./src/app/sub-topic/sub-topic.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('*=>*', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translate(0,-20px)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('400ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translate(0,0)' }))
                        ]), { optional: true }),
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SubTopicComponent);
    return SubTopicComponent;
}());



/***/ }),

/***/ "./src/app/topic/topic.component.css":
/*!*******************************************!*\
  !*** ./src/app/topic/topic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Pacifico|Patrick+Hand');\n\n\n.loader{\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n    position: relative;\n    margin-left: 43%;\n    margin-top: 20%;\n}\n\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n\n.example-full-width {\n    width: 100%;\n}\n\n\n.center{\n    text-align: center;\n    position: relative;\n    display: block;\n    max-width: 429px;\n    word-wrap: break-word;\n    white-space: normal;\n}\n\n\n.center2{\n    position: relative;\n    white-space: normal;\n}\n\n\n.center1{\n    text-align: center;\n    position: relative;\n    left: 38%;\n    top:50px;\n}\n\n\n.center3{\n    text-align: center;\n    position: relative;\n    left: 4%;\n    top: -15px;\n}\n\n\n.card{\n    height: auto;\n    min-height: 350px;\n    width:400px;\n   float:left;\n   border-radius: 14px;\n   margin-left: 70px;\n   margin-bottom: 127px;\n   box-shadow: 4px 4px 19px #9e8181;\n   margin-right: 60px;\n   margin-top: -23px;\n   font-family: 'Patrick Hand', cursive;\n}\n\n\n.card:hover{\n    cursor: pointer !important;\n}\n\n\n.toolbar{\n\tposition: relative !important;\n    bottom: 56px !important;\n\n}\n\n\n.container2{\n\tposition: relative;\n\ttop: 142px;\n    left: 138px;\n\tmargin-top: 60px;\n\tmax-width: 92%;\n}\n\n\nmat-toolbar{\n    background: #ff4081;\n    height: auto;\n    word-wrap: break-word;\n    color: #fff;\n    padding: 14px;\n}\n\n\n.description2{\n    margin:30px;\n    font-size: 26px;\n    font-family: 'Patrick Hand', cursive;\n}\n\n\n.description1{\n    margin:30px;\n    font-size: 20px;\n    font-family: 'Patrick Hand', cursive;\n}\n\n\n.description{\n    text-align: center;\n    /* margin-left: 87px; */\n    margin-top: 12%;\n    font-size: 48px;\n    font-family: 'Patrick Hand', cursive;\n}\n\n\n.openForm{\n    bottom: 28px;\n    position: relative;\n    float: right;\n    margin-right: 71px;\n    outline:none;\n}\n\n\n.link{\n    font-family: 'Patrick Hand', cursive;\n    text-decoration: none;\n    color:blue;\n}\n\n\n.link:hover{\n    text-decoration: none;\n    cursor: pointer;\n    color:red;\n\n}\n\n\ntd span {\n    font-size: 19px;\n}\n\n\n.genreValue{\n    display: none;\n}\n\n\n.addlink{\n   font-size: 10px;\n   float:right;\n   cursor: pointer;\n}\n\n\n.formButtons{\n    margin-top: 12px;\n    float: right;\n    margin-left: 22px;\n    font-size: 20px;\n}\n\n\n.delete{\n    position: relative;\n    left: calc(100% - 28px);\n    top: -27px;\n    outline: none;\n    z-index: 1000;\n}\n\n\n@media screen and (max-width: 800px) {\n\n}"

/***/ }),

/***/ "./src/app/topic/topic.component.html":
/*!********************************************!*\
  !*** ./src/app/topic/topic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loader\" *ngIf=\"!currentGenre\" src=\"https://i.gifer.com/origin/7e/7ee3cfe72db589bdb95ad0f9edbaf6d4_w200.webp\">\n<div *ngIf=\"currentGenre.length>0\">\n<h1 style=\" font-family: 'Patrick Hand', cursive;\ntext-align: center;\">TOPICS</h1>\n\n<h2 style=\" font-family: 'Patrick Hand', cursive;\ntext-align: center;\">IN {{ currentGenre | uppercase }}</h2>\n\n<form class=\"example-form center1\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Search\">\n  </mat-form-field>\n</form>\n<button mat-fab color=\"accent\" class=\"openForm\" mat-raised-button (click)=\"addNew(openForm)\"><i class=\"fas fa-plus\"></i></button>\n\n<p class=\"description\" *ngIf=\"topicArray.length < 1\">Nothing to show dude!</p>\n<div class=\"container2\" [@fadeIn]=\"topicArray.length\">\n  <div class=\"card\" *ngFor=\"let topic of topicArray;let i = index\">\n    <div *ngIf=\"!topic.isSubTopic\" (click)=\"open(openModal,i)\">\n\n      <button *ngIf=\"topic.subTopics.length<=0\" mat-fab color=\"accent\" class=\"delete\" mat-raised-button (click)=\"delete(i)\"><i class=\"fa fa-times\"></i></button>\n      \n      <mat-toolbar color=\"accent\" class=\"toolbar\">\n        <span class=\"title center\">{{ i+1 }}. {{ topic.topicName }}</span>\n      </mat-toolbar>\n      <div class=\"description1\">\n        <div *ngIf=\"topic.content.length <= 0\" >\n        <div *ngFor=\"let linkData of topic.linkData;let i=index\">\n          <table>\n              <tr>\n                <td><span>{{i+1}}.</span></td>\n                <td><a target=\"_blank\" [href]=\"linkData.link\" *ngIf=\"linkData.linkCaption\" class=\"link\">{{ linkData.linkCaption\n                    }}</a>\n                  <a [href]=\"linkData.link\" *ngIf=\"!linkData.linkCaption\" class=\"link\">{{ linkData.link }}</a></td>\n              </tr>\n            </table>\n        </div>  \n      </div>\n        <span>\n          {{ topic.content.substr(0,140) }} \n          <p *ngIf=\"topic.content.length>140\" style=\"color:red\"> ... Read more</p> \n        </span>\n      </div>\n    </div>\n    <div *ngIf=\"topic.isSubTopic\" (click)=\"goToSubTopic(topic._id)\">\n      <button mat-fab color=\"accent\" class=\"delete\" mat-raised-button (click)=\"delete(i)\"><i class=\"fa fa-times\"></i></button>\n      <div class=\"description\"><span>{{ topic.topicName }} </span></div>\n    </div>\n  </div>\n</div>\n\n</div>\n\n\n<ng-template #openModal let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <mat-toolbar>\n      <span class=\"title center2\">{{ currentOpened.topicName }}</span>\n    </mat-toolbar>\n  </div><br>\n  <p style=\"text-align: center;\" *ngIf=\"currentOpened.linkData.length>0\">Important Links : </p><br>\n  <div class=\"modal-body\" *ngFor=\"let linkData of currentOpened.linkData;let i=index\">\n\n    <table>\n      <tr>\n        <td><span>{{i+1}}.</span></td>\n        <td><a target=\"_blank\" [href]=\"linkData.link\" *ngIf=\"linkData.linkCaption\" class=\"link\">{{ linkData.linkCaption\n            }}</a>\n          <a [href]=\"linkData.link\" *ngIf=\"!linkData.linkCaption\" class=\"link\">{{ linkData.link }}</a></td>\n      </tr>\n    </table>\n  </div><br>\n  <p *ngIf=\"currentOpened.content\" style=\"text-align: center;\">Description</p>\n  <div class=\"modal-body\">\n    <div class=\"description2\"><span>{{ currentOpened.content }}</span></div>\n  </div>\n\n</ng-template>\n\n<ng-template #openForm let-c=\"close\" let-d=\"dismiss\">\n  <mat-toolbar>\n    <span class=\"title center2\">Add new Term</span>\n  </mat-toolbar><br><br>\n  <form class=\"example-form center3\" [formGroup]=\"topicForm\" (ngSubmit)=\"add()\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Topic\" formControlName=\"topicName\" required>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select #isSt matInput [value]=\"true\" placeholder=\"Will there be any subtopic\" formControlName=\"isSubTopic\">\n        <mat-option [value]=\"true\">Yes</mat-option>\n        <mat-option [value]=\"false\">No</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <div *ngIf=\"!isSt.value\">\n      <div formArrayName=\"linkData\" *ngFor=\"let item of topicForm.get('linkData').controls; let i = index;\">\n        <div [formGroupName]=\"i\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Link\" rows=\"4\" formControlName=\"link\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"LinkCaption\" rows=\"4\" formControlName=\"linkCaption\">\n          </mat-form-field>\n\n        </div>\n      </div>\n      <span (click)=\"addItem()\" class=\"addLink\" style=\"font-size: 13px;float:right;cursor: pointer;\"><i class=\"fas fa-plus\"\n          style=\"font-size: 10px;\"></i> Add more Links</span>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Description\" rows=\"4\" formControlName=\"content\" required></textarea>\n      </mat-form-field>\n    </div>\n    <button class=\"formButtons\" mat-raised-button (click)=\"Cross_click()\">Cancel</button>\n    <button class=\"formButtons\" type=\"submit\" mat-raised-button>Add</button>\n  </form>\n\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/topic/topic.component.ts":
/*!******************************************!*\
  !*** ./src/app/topic/topic.component.ts ***!
  \******************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicComponent = /** @class */ (function () {
    function TopicComponent(modalService, _baseService, router, formBuilder, route, snackBar) {
        this.modalService = modalService;
        this._baseService = _baseService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.snackBar = snackBar;
        this.topicArray = [];
        this.currentOpened = {};
        this.height = '700px';
        this.width = '800px';
        this.height1 = '600px';
        this.width1 = '600px';
        this.list = ['a'];
    }
    TopicComponent.prototype.ngOnInit = function () {
        this.topicForm = this.formBuilder.group({
            genre: [{ value: this.id, disabled: true }],
            topicName: '',
            isSubTopic: '',
            content: '',
            linkData: this.formBuilder.array([this.createItem()])
        });
        this.id = this.router.snapshot.params.id;
        this.getTopics(this.id);
    };
    TopicComponent.prototype.getTopics = function (id) {
        var _this = this;
        this._baseService.getTopic(id).subscribe(function (res) {
            _this.currentGenre = res.genre;
            console.log('res out', res);
            if (res.topics)
                _this.topicArray = res.topics;
            console.log('res', res.topics);
            console.log(res.topics[1].content.length);
        });
    };
    TopicComponent.prototype.open = function (content, i) {
        //i = this.topicArray.length - 1;
        this.currentOpened = this.topicArray[i];
        console.log(this.currentOpened);
        var dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.modalService.open(content, {
            height: this.height,
            width: this.width,
            panelClass: 'custom-modalbox'
        });
    };
    TopicComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            link: '',
            linkCaption: ''
        });
    };
    TopicComponent.prototype.addItem = function () {
        this.linkData = this.topicForm.get('linkData');
        this.linkData.push(this.createItem());
    };
    TopicComponent.prototype.addNew = function (content) {
        var dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.modalService.open(content, {
            height: this.height1,
            width: this.width1,
            panelClass: 'custom-modalbox'
        });
    };
    TopicComponent.prototype.Cross_click = function () {
        this.modalService.closeAll();
    };
    // Reactive form formGroup data  
    TopicComponent.prototype.add = function () {
        var _this = this;
        this._baseService.postTopic(this.topicForm.value, this.id).subscribe(function (data) {
            console.log('post data is :' + data);
            _this.snackBar.open('The new Topic has been created!', '', {
                duration: 3000
            });
        });
        console.log(this.topicForm.value);
        this.getTopics(this.id);
        this.topicForm.reset();
        //this.genreArray.push(this.topicForm.value);
        this.Cross_click();
    };
    TopicComponent.prototype.addLink = function () {
        this.list.push('a');
    };
    TopicComponent.prototype.goToSubTopic = function (id) {
        this.route.navigate(['genre/topic/' + this.id + '/subtopic/' + id]);
    };
    TopicComponent.prototype.delete = function (index) {
        var _this = this;
        this._baseService.deleteTopic(this.topicArray[index]._id).subscribe(function (result) {
            console.log(result);
            _this.snackBar.open('The topic has been deleted!', '', {
                duration: 3000
            });
        });
        this.topicArray.splice(index, 1);
        console.log('deleted', index);
    };
    TopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic',
            template: __webpack_require__(/*! ./topic.component.html */ "./src/app/topic/topic.component.html"),
            styles: [__webpack_require__(/*! ./topic.component.css */ "./src/app/topic/topic.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('*=>*', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translate(0,-20px)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('400ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translate(0,0)' }))
                        ]), { optional: true }),
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_material___WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material___WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sarthak/Projects/side projects/blazey/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map