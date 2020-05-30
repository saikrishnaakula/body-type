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

/***/ "./src/app/alist/alist.component.css":
/*!*******************************************!*\
  !*** ./src/app/alist/alist.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsaXN0L2FsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alist/alist.component.html":
/*!********************************************!*\
  !*** ./src/app/alist/alist.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  alist works!\n</p>\n"

/***/ }),

/***/ "./src/app/alist/alist.component.ts":
/*!******************************************!*\
  !*** ./src/app/alist/alist.component.ts ***!
  \******************************************/
/*! exports provided: AlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlistComponent", function() { return AlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlistComponent = /** @class */ (function () {
    function AlistComponent() {
    }
    AlistComponent.prototype.ngOnInit = function () {
    };
    AlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alist',
            template: __webpack_require__(/*! ./alist.component.html */ "./src/app/alist/alist.component.html"),
            styles: [__webpack_require__(/*! ./alist.component.css */ "./src/app/alist/alist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlistComponent);
    return AlistComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark text-white\">\n  Welcome to {{ title }}!\n</nav>\n<main class=\"container-fluid pt-3 pb-3\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <app-qa *ngFor=\"let q of qs | slice : page-1 : page\" [q]=\"q\"></app-qa>\n    </div>\n    <div class=\"w-100 mt-2\"></div>\n    <div class=\"col-2\">\n      <button type=\"button\" (click)=\"getPrevious()\" class=\"btn btn-primary\">Previous</button>\n    </div>\n    <div class=\"offset-7 col-3 text-right\">\n      <button *ngIf=\"page != '15'\" type=\"button\" (click)=\"page =page+1\" class=\"btn btn-primary\">Next</button>\n      <button *ngIf=\"page =='15'\" type=\"button\" (click)=\"showRes()\" class=\"btn btn-primary\">Submit</button>\n    </div>\n    <div class=\"w-100 mt-2\"></div>\n    <div class=\"col-12\">\n      {{map['a']}}  : {{ans['a']}}\n      {{map['b']}}  : {{ans['b']}}\n      {{map['c']}}  : {{ans['c']}}\n    </div>\n  </div>\n</main>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'Body Type Detector';
        this.qs = [];
        this.page = 1;
        this.ans = { a: 0, b: 0, c: 0 };
        this.map = { a: 'Vata', b: 'Pitta', c: 'Kapha' };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getQuestionsList().subscribe(function (resp) {
            _this.qs = resp;
        });
    };
    AppComponent.prototype.getPrevious = function () {
        if (this.page === 1) {
            this.page = 1;
        }
        else {
            this.page = this.page - 1;
        }
    };
    AppComponent.prototype.showRes = function () {
        var _this = this;
        this.ans = { a: 0, b: 0, c: 0 };
        this.appService.getQuestionsList().subscribe(function (resp) {
            resp.forEach(function (e) {
                _this.ans[e.ans] += 1;
            });
            console.log(_this.ans);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _qa_qa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qa/qa.component */ "./src/app/qa/qa.component.ts");
/* harmony import */ var _alist_alist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alist/alist.component */ "./src/app/alist/alist.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _qa_qa_component__WEBPACK_IMPORTED_MODULE_5__["QaComponent"],
                _alist_alist_component__WEBPACK_IMPORTED_MODULE_6__["AlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/question.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AppService = /** @class */ (function () {
    function AppService() {
        var _this = this;
        this.quiz = [];
        _data__WEBPACK_IMPORTED_MODULE_2__["quiz"].forEach(function (e) {
            return _this.quiz.push(new _question__WEBPACK_IMPORTED_MODULE_1__["Question"](e.id, e.category, e.question, e.oa, e.ob, e.oc));
        });
    }
    AppService.prototype.getQuestionsList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.quiz);
    };
    AppService.prototype.getInfoList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_data__WEBPACK_IMPORTED_MODULE_2__["info"]);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: quiz, info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quiz", function() { return quiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
var quiz = [
    {
        id: '1',
        category: 'Physical Attributes',
        question: 'Body frame',
        oa: 'Thin, Bony and small framed. Hardly  gain weight',
        ob: 'medium built. Can gain or lose weight easily',
        oc: 'large built.gain weight easily but difficlt to lose'
    },
    {
        id: '2',
        category: 'Physical Attributes',
        question: 'Walk and Talk',
        oa: 'Fast walk and talk',
        ob: 'moderate and determined walk',
        oc: 'slow and steady walk'
    },
    {
        id: '3',
        category: 'Physical Attributes',
        question: 'weather reaction',
        oa: 'enjoy warm climate but feel unconfortable in cool weather ',
        ob: 'enjoy cool weather and dislike warm climate',
        oc: 'confortable for most of the year but prefer summar and spring. Don’t like damp cimate'
    },
    {
        id: '4',
        category: 'Physical Attributes',
        question: 'Sweating',
        oa: 'Sweat little but not much. Have  minimal body odur ',
        ob: 'Sweat a lot. Have medium body odour',
        oc: 'Sweat  moderatly but sweat a lot when working hard. Have strong body odur'
    },
    {
        id: '5',
        category: 'Physical Attributes',
        question: 'Appetite',
        oa: 'irregular. Sometime I feel hungry sometime I don’t ',
        ob: 'Strong and Sharp. Always feel hungry ',
        oc: 'Decent appetite. Have tendecy  to eat for confort and taste'
    },
    {
        id: '6',
        category: 'Physical Attributes',
        question: 'Skin',
        oa: 'Normal to dry, rough, thin and cool. Skin issues like dryness, dullness and wrinkly',
        ob: 'Normal to oily, soft, reddish,sensitive and warm. Skin issues like inflammation.',
        oc: 'Normal to oily, soft, thick and cool.Skin issues like excessive oily, itching, fungal infections'
    },
    {
        id: '7',
        category: 'Physical Attributes',
        question: 'Hair',
        oa: 'Rough, Dry and wavy. I get split ends easily',
        ob: 'Normal, Straigt, thin and brownish.',
        oc: 'Thick, curly and oily.Hair  color tends to be on darker side.'
    },
    {
        id: '8',
        category: 'Physical Attributes',
        question: 'Lips and Teeth',
        oa: 'Have thin lips that tend to get dry.teeth can be somewhat uneven. Teeth may require constant attention.',
        ob: 'medium sized soft lips. Upper lip slightly darker than the lower lip. Teeth are medium sized but I tend to suffer from cavities.',
        oc: 'Large  and smooth lips.Teeth are wellformed and aligned and require less care in general.'
    },
    {
        id: '9',
        category: 'Physical Attributes',
        question: 'Eyes',
        oa: 'Smallin size. Feel dry and sleepy eyes often. I blink a lot.',
        ob: 'Medium in size. I Often get reddish eyes.',
        oc: 'Big and attractive. I have thick eye lashes.'
    },
    {
        id: '10',
        category: 'Physical Attributes',
        question: 'Genral signs',
        oa: 'Craking sounds in joints.small forehead. Nails crack easily.',
        ob: 'Black moles on body. Medium forehead. Nails are pink and soft',
        oc: 'Disproportionate body like heavy thighs, hips etc, large forehead. Nails are wide and whitish.'
    },
    {
        id: '11',
        category: 'Emotional and mental characteristics',
        question: 'Memory',
        oa: 'Quick to learn but quick to forget. Short term memory is good',
        ob: 'Avergae speed of learning. But once learnt never forgets.',
        oc: 'Slow to learn but remmebers for long time. Long term memory is good.'
    },
    {
        id: '12',
        category: 'Emotional and mental characteristics',
        question: 'Mind',
        oa: 'Mind tends to get restless easily.',
        ob: 'Mind gets impatient or aggressive easily',
        oc: 'mind remains cool and calm. Mostly, unruffled.'
    },
    {
        id: '13',
        category: 'Emotional and mental characteristics',
        question: 'Mind on Actions',
        oa: 'over thinking',
        ob: 'Quick implementations ',
        oc: 'lazy implementations. Has a tendency to procrastinate.'
    },
    {
        id: '14',
        category: 'Emotional and mental characteristics',
        question: 'Sleep quality',
        oa: 'light and distrubed sleep. I wakeup easily in the morning.',
        ob: 'Moderate but regular.  I can go  back to sleep easily.',
        oc: 'deep and heavy. I cant easily wake up in morning.'
    },
    {
        id: '15',
        category: 'Emotional and mental characteristics',
        question: 'Emotional Nature',
        oa: 'I worry a lot. Often  feel  nervous and anxious',
        ob: 'I often get irritable, angry, and impatient.',
        oc: 'Loving and caring. It takes a lot to make me angry'
    }
];
var info = [
    {
        id: '1',
        type: 'Vata',
        comments: 'Air+ether',
        Qualities: 'dry,light,cold,rough,subtle,mobile,clear',
        Functions: 'movement and communication',
        Career: 'Sale, marketing, Acting, Dancing , teaching and other creative fields are recommended',
        Imbalances: 'body communication ',
        causes: 'dryness, gas, bloating, indigestion, fear depression and fickle mind',
        cut: 'dry fruis, tea,coffee, raw veggitable salads, kidney beans ',
        do: 'cold pressed oil, desi ghee, fresh milk and milk products, '
    },
    {
        id: '2',
        type: 'Pitta',
        comments: 'Fire+water',
        Qualities: 'Hot,sharp, light, spreading, liquid, oily',
        Functions: 'digestion and transformation',
        Career: 'Leadership, management, medicine, finance, policitics, advocacy are better suited',
        Imbalances: 'excess heat in body',
        causes: 'bleeding gums, acidity, hair fall, frustration,excess bleeding in women, skin rashes, anger and jealousy',
        cut: 'salty spicy and sour foods',
        do: 'sweets, food high in water content'
    },
    {
        id: '3',
        type: 'Kapha',
        comments: 'water+earth',
        Qualities: 'heavy, slow, cool, oily, smooth, dense, soft, stable, gross, cloudy(sticky)',
        Functions: 'cohesiveness, structure and lubrication',
        Career: 'Administration, public relations, nursing, counselling are recommended',
        Imbalances: 'excessive oily and concestion',
        causes: 'cough, sinus, snezing, leathergy and obesity',
        cut: 'deep fryed oily food, milk and milk products',
        do: 'home made spicy food, fresh frui and veggies, besan made food, ginger tea'
    },
    {
        id: '4',
        type: 'vata pitta',
        comments: 'inbalanced'
    },
    {
        id: '5',
        type: 'pitta kapha',
        comments: 'inbalanced'
    },
    {
        id: '6',
        type: 'vata kapha',
        comments: 'inbalanced'
    },
    {
        id: '7',
        type: 'tridosha',
        comments: 'Perfectly balanced or highly inbalanced'
    }
];


/***/ }),

/***/ "./src/app/qa/qa.component.css":
/*!*************************************!*\
  !*** ./src/app/qa/qa.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    white-space: unset !important;\r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcWEvcWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3FhL3FhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG59ICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/qa/qa.component.html":
/*!**************************************!*\
  !*** ./src/app/qa/qa.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card \">\n  <div class=\"card-header\">\n    {{q.id+') ' }}{{q.question}}\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"q.ans\">\n      <div ngbButtonLabel class=\"col-12 text-left\" >\n        <input ngbButton type=\"radio\" value=\"a\"> {{q.oa}}\n      </div>\n      <div class=\"w-100\"></div>\n      <div ngbButtonLabel class=\"col-12 text-left\">\n        <input ngbButton type=\"radio\" value=\"b\"> {{q.ob}}\n      </div>\n      <div class=\"w-100\"></div>\n      <div ngbButtonLabel class=\"col-12 text-left\" >\n        <input ngbButton type=\"radio\" value=\"c\"> {{q.oc}}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/qa/qa.component.ts":
/*!************************************!*\
  !*** ./src/app/qa/qa.component.ts ***!
  \************************************/
/*! exports provided: QaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaComponent", function() { return QaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../question */ "./src/app/question.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var QaComponent = /** @class */ (function () {
    function QaComponent() {
    }
    QaComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], QaComponent.prototype, "q", void 0);
    QaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-qa',
            template: __webpack_require__(/*! ./qa.component.html */ "./src/app/qa/qa.component.html"),
            styles: [__webpack_require__(/*! ./qa.component.css */ "./src/app/qa/qa.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QaComponent);
    return QaComponent;
}());



/***/ }),

/***/ "./src/app/question.ts":
/*!*****************************!*\
  !*** ./src/app/question.ts ***!
  \*****************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(id, category, question, oa, ob, oc, ans) {
        this.id = id;
        this.category = category;
        this.question = question;
        this.oa = oa;
        this.ob = ob;
        this.oc = oc;
        this.ans = ans;
        this.ans = 'a';
    }
    return Question;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\body-type\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map