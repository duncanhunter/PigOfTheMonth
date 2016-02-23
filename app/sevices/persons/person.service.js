System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var PeopleService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            PeopleService = (function () {
                function PeopleService(_http) {
                    this._http = _http;
                    this.api = "http://localhost:7324/api";
                    this.makeHeaders();
                }
                PeopleService.prototype.makeHeaders = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.headers = headers;
                };
                PeopleService.prototype.get = function (date) {
                    return this._http.get(this.api + "/people/GetPersonsByYear/" + date.toISOString())
                        .map(function (response) { return response.json(); });
                };
                PeopleService.prototype.create = function (person, year) {
                    return this._http.post(this.api + "/people/" + year, JSON.stringify(person), { headers: this.headers })
                        .map(function (response) { return response.json(); });
                };
                PeopleService.prototype.put = function (people) {
                    return this._http.put(this.api + "/people", JSON.stringify(people), { headers: this.headers })
                        .map(function (response) { return response.json(); });
                };
                PeopleService.prototype.delete = function (person) {
                    return this._http.delete(this.api + "/people/" + person.Id, { headers: this.headers })
                        .map(function (response) { return response.json(); });
                };
                PeopleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PeopleService);
                return PeopleService;
            })();
            exports_1("PeopleService", PeopleService);
        }
    }
});
//# sourceMappingURL=person.service.js.map