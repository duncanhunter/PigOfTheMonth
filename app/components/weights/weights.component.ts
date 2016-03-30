import {Component, OnInit, EventEmitter} from 'angular2/core';
import { PeopleService } from './../../sevices/persons/person.service';
import { Person , Chart} from './../../models/models';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';


@Component({
    selector: 'weights',
    templateUrl: 'app/components/weights/weights.component.html',
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: ['app/components/weights/weights.component.css']
})
export class WeightsComponent implements OnInit {
    months: string[] = moment.monthsShort();
    date: Date = new Date()
    people: Person[] = [];
    selectedYear = this.date.getFullYear();
    dataFormatted: boolean;
    colors = ['red', 'blue', 'green', 'orange', 'pink', 'gold', 'purple', 'rose'];
    lineChart = new Chart();

    constructor(private peopleService: PeopleService) {

    }

    ngOnInit() {
        this.get(this.date)
    }

    changeValue(people) {
        this.people = [...people];
        this.formatChartData();
    }

    changeYear(amount) {
        this.date.setFullYear(this.date.getFullYear() + amount);
        this.selectedYear = this.date.getFullYear();
        this.get(this.date);
    }

    get(date: Date) {
        this.peopleService.get(date)
            .subscribe(people => {
                this.people = people;
                this.formatChartData();
            });
    }

    formatChartData() {
        let _lineChartData = [];
        let _lineChartSeries = [];
        
        this.formatColors();

        this.people.forEach((person) => {
            _lineChartSeries.push(person.FullName);
            _lineChartData.push(person.Weights.map((w) => {
                return w.Kg;
            }));
        })
        
        this.lineChart.chartType = 'Line';
        this.lineChart.chartData = _lineChartData;
        this.lineChart.chartSeries = _lineChartSeries;
        this.lineChart.chartLabels = this.months;
        this.lineChart.chartOptions = {
            animation: true,
            multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
            responsive: true,
        };
        
        this.dataFormatted = true;
    }
    
    formatColors() {
       this.lineChart.chartColors =  this.colors.map((color) => {
                return {
                fillColor: 'rgba(220,220,220, 0.1)',
                strokeColor: color,
                pointColor: color,
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: color,
            };
        })
    }

    create() {
        let person = new Person();
        this.peopleService.create(person, this.selectedYear)
            .subscribe((person) => {
                console.log(`successfully added person`);
                this.people = [...this.people, person];
            }
            );
    }

    put(people: Person[]) {
        this.peopleService.put(people)
            .subscribe((people) => {
                console.log(`successfully updated people`);
            }
            );
    }

    delete(person: Person) {
        this.peopleService.delete(person)
            .subscribe((person) => {
                this.people = _.remove(this.people, (p) => {
                    return p.Id !== person.Id;
                });
                console.log(`successfully deleted person`);
            });
    }



}