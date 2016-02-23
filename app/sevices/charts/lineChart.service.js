System.register(['angular2/core'], function(exports_1) {
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
    var LineChartDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LineChartDirective = (function () {
                function LineChartDirective(el) {
                    this.el = el;
                }
                LineChartDirective.prototype.ngOnChanges = function (changes) {
                    if (this.data.length > 0) {
                        this.createChart(this.el);
                    }
                };
                LineChartDirective.prototype.createChart = function (el) {
                    var _this = this;
                    el.nativeElement.style.width = '100%';
                    el.nativeElement.style.height = '300px';
                    var chartData = this.data.map(function (person, i) {
                        var color = _this.colors[i];
                        return {
                            label: person.FullName,
                            fillColor: 'rgba(220,220,220, 0.1)',
                            strokeColor: color,
                            pointColor: color,
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: color,
                            data: person.Weights.map(function (w) { return w.Kg; })
                        };
                    });
                    var data = {
                        labels: this.labels,
                        datasets: chartData
                    };
                    if (window.lineChart !== undefined)
                        window.lineChart.destroy();
                    var ctx = el.nativeElement.getContext('2d');
                    window.lineChart = new Chart(ctx).Line(data, {
                        multiTooltipTemplate: '<%= datasetLabel %> - <%= value %>',
                    });
                };
                LineChartDirective = __decorate([
                    core_1.Directive({
                        selector: '[chart]',
                        properties: [
                            'colors',
                            'labels',
                            'data'
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], LineChartDirective);
                return LineChartDirective;
            })();
            exports_1("LineChartDirective", LineChartDirective);
        }
    }
});
//# sourceMappingURL=lineChart.service.js.map