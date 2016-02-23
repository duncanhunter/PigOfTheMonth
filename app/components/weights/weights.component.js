System.register(['angular2/core', './../../sevices/persons/person.service', './../../models/models', 'angular2/common', './../../sevices/charts/lineChart.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, person_service_1, models_1, common_1, lineChart_service_1;
    var WeightsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lineChart_service_1_1) {
                lineChart_service_1 = lineChart_service_1_1;
            }],
        execute: function() {
            WeightsComponent = (function () {
                function WeightsComponent(peopleService) {
                    this.peopleService = peopleService;
                    this.months = moment.monthsShort();
                    this.date = new Date();
                    this.people = [];
                    this.selectedYear = this.date.getFullYear();
                    this.colors = ['red', 'blue', 'green', 'orange', 'pink', 'gold', 'purple', 'rose'];
                }
                WeightsComponent.prototype.ngOnInit = function () {
                    this.get(this.date);
                };
                WeightsComponent.prototype.changeValue = function (people) {
                    this.people = people.slice();
                };
                WeightsComponent.prototype.changeYear = function (amount) {
                    this.date.setFullYear(this.date.getFullYear() + amount);
                    this.selectedYear = this.date.getFullYear();
                    this.get(this.date);
                };
                WeightsComponent.prototype.get = function (date) {
                    var _this = this;
                    this.peopleService.get(date)
                        .subscribe(function (people) {
                        _this.people = people;
                    });
                };
                WeightsComponent.prototype.create = function () {
                    var _this = this;
                    var person = new models_1.Person();
                    this.peopleService.create(person, this.selectedYear)
                        .subscribe(function (person) {
                        console.log("successfully added person");
                        _this.people = _this.people.concat([person]);
                    });
                };
                WeightsComponent.prototype.put = function (people) {
                    this.peopleService.put(people)
                        .subscribe(function (people) {
                        console.log("successfully updated people");
                    });
                };
                WeightsComponent.prototype.delete = function (person) {
                    var _this = this;
                    this.peopleService.delete(person)
                        .subscribe(function (person) {
                        _this.people = _.remove(_this.people, function (p) {
                            return p.Id !== person.Id;
                        });
                        console.log("successfully deleted person");
                    });
                };
                WeightsComponent = __decorate([
                    core_1.Component({
                        selector: 'weights',
                        templateUrl: 'app/components/weights/weights.component.html',
                        directives: [lineChart_service_1.LineChartDirective, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        styleUrls: ['app/components/weights/weights.component.css']
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PeopleService])
                ], WeightsComponent);
                return WeightsComponent;
            })();
            exports_1("WeightsComponent", WeightsComponent);
        }
    }
});
//# sourceMappingURL=weights.component.js.map