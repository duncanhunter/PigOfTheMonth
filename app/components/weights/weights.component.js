System.register(['angular2/core', './../../sevices/persons/person.service', 'angular2/common', './../../sevices/charts/lineChart.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, person_service_1, common_1, lineChart_service_1;
    var WeightsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lineChart_service_1_1) {
                lineChart_service_1 = lineChart_service_1_1;
            }],
        execute: function() {
            WeightsComponent = (function () {
                function WeightsComponent(personService) {
                    this.personService = personService;
                    this.months = moment.monthsShort();
                    this.date = new Date();
                    this.people = [];
                    this.colors = ['red', 'blue', 'green', 'orange', 'pink'];
                }
                WeightsComponent.prototype.ngOnInit = function () {
                    this.get(this.date);
                };
                WeightsComponent.prototype.get = function (date) {
                    var _this = this;
                    this.personService.get(date)
                        .subscribe(function (people) {
                        _this.people = people;
                    });
                };
                WeightsComponent.prototype.save = function () {
                };
                WeightsComponent.prototype.delete = function () {
                };
                WeightsComponent.prototype.update = function () {
                };
                WeightsComponent.prototype.put = function () {
                };
                WeightsComponent = __decorate([
                    core_1.Component({
                        selector: 'weights',
                        templateUrl: 'app/components/weights/weights.component.html',
                        directives: [lineChart_service_1.LineChartDirective, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
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