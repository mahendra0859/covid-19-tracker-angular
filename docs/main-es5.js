(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/countries/countries.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/countries/countries.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-white text-center\">\n  <h1 class=\"display-4\">Corona Covid-19 Tracker Country Wise</h1>\n  <hr class=\"my-4\" />\n  <div class=\"mx-auto\">\n    <div class=\"form-group col-lg-5 mx-auto\">\n      <label for=\"country\">Select Country</label>\n      <select\n        class=\"form-control\"\n        id=\"country\"\n        #input\n        (change)=\"updateCases(input.value)\"\n      >\n        <option [value]=\"country\" *ngFor=\"let country of countries\">{{\n          country\n        }}</option>\n      </select>\n    </div>\n  </div>\n  <app-case-card\n    [totalConfirmed]=\"totalConfirmed\"\n    [totalRecovered]=\"totalRecovered\"\n    [totalDeaths]=\"totalDeaths\"\n    [totalActive]=\"totalActive\"\n  ></app-case-card>\n  <div class=\"row\">\n    <div class=\"col\">\n      <google-chart [data]=\"lineChart\" *ngIf=\"lineChart\"></google-chart>\n    </div>\n    <div class=\"col\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Sno.</th>\n            <th>Date</th>\n            <th>Case</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of selectedCountryData; index as i\">\n            <td>{{ i + 1 }}</td>\n            <td>{{ data.date | date }}</td>\n            <td>{{ data.cases }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-white text-center\">\n  <h1 class=\"display-4\">Corona Covid-19 Tracker</h1>\n  <hr class=\"my-4\" />\n  <app-case-card\n    [totalConfirmed]=\"totalConfirmed\"\n    [totalRecovered]=\"totalRecovered\"\n    [totalDeaths]=\"totalDeaths\"\n    [totalActive]=\"totalActive\"\n  ></app-case-card>\n  <hr class=\"my-4\" />\n  <div class=\"ui form\">\n    <div class=\"inline fields\">\n      <label for=\"cases\">Select Case type:</label>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input\n            type=\"radio\"\n            name=\"cases\"\n            checked=\"\"\n            tabindex=\"0\"\n            class=\"hidden\"\n            value=\"c\"\n            id=\"c\"\n            #c\n            (click)=\"updateChart(c)\"\n          />\n          <label for=\"c\">Confirmed</label>\n        </div>\n      </div>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input\n            type=\"radio\"\n            name=\"cases\"\n            tabindex=\"0\"\n            class=\"hidden\"\n            value=\"d\"\n            id=\"d\"\n            #d\n            (click)=\"updateChart(d)\"\n          />\n          <label for=\"d\">Deaths</label>\n        </div>\n      </div>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input\n            type=\"radio\"\n            name=\"cases\"\n            tabindex=\"0\"\n            class=\"hidden\"\n            value=\"r\"\n            id=\"r\"\n            #r\n            (click)=\"updateChart(r)\"\n          />\n          <label for=\"r\">Recovered</label>\n        </div>\n      </div>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input\n            type=\"radio\"\n            name=\"cases\"\n            tabindex=\"0\"\n            class=\"hidden\"\n            value=\"a\"\n            id=\"a\"\n            #a\n            (click)=\"updateChart(a)\"\n          />\n          <label for=\"a\">Active</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <google-chart [data]=\"columnChart\" *ngIf=\"columnChart\"></google-chart>\n    </div>\n    <div class=\"col\">\n      <google-chart [data]=\"pieChart\" *ngIf=\"pieChart\"></google-chart>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Covid-19 Tracker</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\"\n          >Home <span class=\"sr-only\">(current)</span></a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"countries\">Countries</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/case-card/case-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/case-card/case-card.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"card col p-3 m-3\">\n    <div class=\"ui statistic\">\n      <div class=\"label\">\n        <h3>Confirmed</h3>\n      </div>\n      <div class=\"value\">\n        {{ totalConfirmed }}\n      </div>\n    </div>\n  </div>\n  <div class=\"card col p-3 m-3\">\n    <div class=\"ui statistic\">\n      <div class=\"label\">\n        <h3>Recovered</h3>\n      </div>\n      <div class=\"value\">\n        {{ totalRecovered }}\n      </div>\n    </div>\n  </div>\n  <div class=\"card col p-3 m-3\">\n    <div class=\"ui statistic\">\n      <div class=\"label\">\n        <h3>Deaths</h3>\n      </div>\n      <div class=\"value\">\n        {{ totalDeaths }}\n      </div>\n    </div>\n  </div>\n  <div class=\"card col p-3 m-3\">\n    <div class=\"ui statistic\">\n      <div class=\"label\">\n        <h3>Active</h3>\n      </div>\n      <div class=\"value\">\n        {{ totalActive }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");





var routes = [
    {
        path: "",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    { path: "countries", component: _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_4__["CountriesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'covid19-cases-tracker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/fesm5/ng2-google-charts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");
/* harmony import */ var _components_shared_case_card_case_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shared/case-card/case-card.component */ "./src/app/components/shared/case-card/case-card.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_9__["CountriesComponent"],
                _components_shared_case_card_case_card_component__WEBPACK_IMPORTED_MODULE_10__["CaseCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__["Ng2GoogleChartsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/countries/countries.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/countries/countries.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/countries/countries.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/countries/countries.component.ts ***!
  \*************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(dataService) {
        this.dataService = dataService;
        this.countries = [];
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.lineChart = {
            chartType: "LineChart",
        };
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getGlobalData().subscribe(function (result) {
            _this.data = result;
            _this.data.forEach(function (cs) {
                _this.countries.push(cs.country);
                if (cs.country == "US") {
                    _this.totalRecovered = cs.recovered;
                    _this.totalActive = cs.active;
                    _this.totalConfirmed = cs.confirmed;
                    _this.totalDeaths = cs.deaths;
                }
            });
        });
        this.dataService.getDateWiseGlobalData().subscribe(function (result) {
            _this.dateWiseData = result;
            _this.selectedCountryData = _this.dateWiseData["US"];
            _this.lineChart = null;
            setTimeout(function () {
                _this.updateChart();
            }, 5);
        });
    };
    CountriesComponent.prototype.updateCases = function (country) {
        var _this = this;
        this.data.forEach(function (cs) {
            if (cs.country == country) {
                _this.totalRecovered = cs.recovered;
                _this.totalActive = cs.active;
                _this.totalConfirmed = cs.confirmed;
                _this.totalDeaths = cs.deaths;
            }
        });
        this.selectedCountryData = this.dateWiseData[country];
        this.lineChart = null;
        setTimeout(function () {
            _this.updateChart();
        }, 5);
    };
    CountriesComponent.prototype.updateChart = function () {
        var dataTable = [];
        dataTable.push(["Date", "Cases"]);
        this.selectedCountryData.forEach(function (cs) {
            dataTable.push([cs.date, cs.cases]);
        });
        this.lineChart = {
            chartType: "LineChart",
            dataTable: dataTable,
            options: {
                title: "Tasks",
                animation: {
                    duration: 1000,
                    easing: "out",
                },
            },
        };
    };
    CountriesComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
    ]; };
    CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-countries",
            template: __webpack_require__(/*! raw-loader!./countries.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/components/countries/countries.component.css")]
        })
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.pieChart = {
            chartType: "PieChart",
        };
        this.columnChart = {
            chartType: "ColumnChart",
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getGlobalData().subscribe({
            next: function (result) {
                _this.globalData = result;
                result.forEach(function (cs) {
                    _this.totalActive += cs.active;
                    _this.totalConfirmed += cs.confirmed;
                    _this.totalDeaths += cs.deaths;
                    _this.totalRecovered += cs.active;
                });
                _this.pieChart = null;
                _this.columnChart = null;
                setTimeout(function () {
                    _this.initChart();
                }, 5);
            },
            error: function (error) {
                console.log("error", error);
            },
        });
    };
    HomeComponent.prototype.initChart = function (caseType) {
        if (caseType === void 0) { caseType = "c"; }
        var dataTable = [];
        dataTable.push(["Country", "cases"]);
        this.globalData.forEach(function (cs) {
            var value;
            if (caseType == "c")
                if (cs.confirmed > 2000)
                    value = cs.confirmed;
            if (caseType == "a")
                if (cs.active > 2000)
                    value = cs.active;
            if (caseType == "d")
                if (cs.deaths > 1000)
                    value = cs.deaths;
            if (caseType == "r")
                if (cs.recovered > 200)
                    value = cs.recovered;
            if (value)
                dataTable.push([cs.country, value]);
        });
        this.pieChart = {
            chartType: "PieChart",
            dataTable: dataTable,
            options: {
                height: 500,
                animation: {
                    duration: 1000,
                    easing: "out",
                },
            },
        };
        this.columnChart = {
            chartType: "ColumnChart",
            dataTable: dataTable,
            options: {
                height: 500,
                animation: {
                    duration: 1000,
                    easing: "out",
                },
            },
        };
    };
    HomeComponent.prototype.updateChart = function (input) {
        var _this = this;
        this.pieChart = null;
        this.columnChart = null;
        setTimeout(function () {
            _this.initChart(input.value);
        }, 5);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/case-card/case-card.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/shared/case-card/case-card.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Nhc2UtY2FyZC9jYXNlLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/case-card/case-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/case-card/case-card.component.ts ***!
  \********************************************************************/
/*! exports provided: CaseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseCardComponent", function() { return CaseCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CaseCardComponent = /** @class */ (function () {
    function CaseCardComponent() {
    }
    CaseCardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("totalConfirmed")
    ], CaseCardComponent.prototype, "totalConfirmed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("totalRecovered")
    ], CaseCardComponent.prototype, "totalRecovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("totalDeaths")
    ], CaseCardComponent.prototype, "totalDeaths", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("totalActive")
    ], CaseCardComponent.prototype, "totalActive", void 0);
    CaseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-case-card",
            template: __webpack_require__(/*! raw-loader!./case-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/case-card/case-card.component.html"),
            styles: [__webpack_require__(/*! ./case-card.component.css */ "./src/app/components/shared/case-card/case-card.component.css")]
        })
    ], CaseCardComponent);
    return CaseCardComponent;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
        this.globalDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-11-2020.csv";
        this.dateWiseGlobalDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
    }
    DataServiceService.prototype.getGlobalData = function () {
        return this.http.get(this.globalDataUrl, { responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var data = [];
            var raw = {};
            var rows = result.split("\n");
            rows.splice(0, 1);
            rows.forEach(function (row) {
                var cols = row.split(/,(?=\S)/);
                if (cols[3]) {
                    var cs = {
                        country: cols[3],
                        confirmed: +cols[7],
                        deaths: +cols[8],
                        recovered: +cols[9],
                        active: +cols[10],
                    };
                    var temp = raw[cs.country];
                    if (temp) {
                        temp.confirmed += cs.confirmed;
                        temp.deaths += cs.deaths;
                        temp.recovered += cs.recovered;
                        temp.active += cs.active;
                        raw[cs.country] = temp;
                    }
                    else {
                        raw[cs.country] = cs;
                    }
                }
            });
            data = Object.values(raw);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    DataServiceService.prototype.getDateWiseGlobalData = function () {
        return this.http
            .get(this.dateWiseGlobalDataUrl, { responseType: "text" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var rows = result.split("\n");
            var dates = rows[0].split(/,(?=\S)/);
            dates.splice(0, 4);
            rows.splice(0, 1);
            var data = {};
            rows.forEach(function (row) {
                if (row) {
                    var cols = row.split(/,(?=\S)/);
                    var country_1 = cols[1];
                    cols.splice(0, 4);
                    data[country_1] = [];
                    cols.forEach(function (value, index) {
                        var dateWise = {
                            cases: +value,
                            country: country_1,
                            date: new Date(Date.parse(dates[index])),
                        };
                        data[country_1].push(dateWise);
                    });
                }
            });
            return data;
        }));
    };
    DataServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        })
    ], DataServiceService);
    return DataServiceService;
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

module.exports = __webpack_require__(/*! /Users/mahendraar/Mahendra/Angular/covid19-cases-tracker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map