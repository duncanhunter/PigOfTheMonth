import {Directive, ElementRef, Input, OnChanges, SimpleChange} from 'angular2/core';
declare var Chart: any;
declare var window: any;

@Directive({
    selector: '[chart]',
    properties: [
        'colors',
        'labels',
        'data'
    ]
})

export class LineChartDirective implements OnChanges {
    data: any[];
    labels: string[];
    colors: string[];
    
    constructor(private el: ElementRef) {
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (this.data.length > 0) {
            this.createChart(this.el);
        }
    }

    createChart(el) {
        el.nativeElement.style.width = '100%';
        el.nativeElement.style.height = '300px';

        let chartData = this.data.map((person, i) => {
            var color = this.colors[i];
            return {
                label: person.FullName,
                fillColor: 'rgba(220,220,220, 0.1)',
                strokeColor: color,
                pointColor: color,
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: color,
                data: person.Weights.map((w) => { return w.Kg; })
            };
        });

        let data = {
            labels: this.labels,
            datasets: chartData
        };

        if (window.lineChart !== undefined)
            window.lineChart.destroy();

        let ctx: any = el.nativeElement.getContext('2d');
        window.lineChart = new Chart(ctx).Line(
            data,
            {
                multiTooltipTemplate: '<%= datasetLabel %> - <%= value %>',
            }
        );
    }
}
