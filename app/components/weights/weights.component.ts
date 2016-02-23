import {Component, OnInit} from 'angular2/core';
import { PeopleService } from './../../sevices/persons/person.service';
import { Person } from './../../models/models';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { LineChartDirective  } from './../../sevices/charts/lineChart.service';


@Component({
    selector: 'weights',
    templateUrl: 'app/components/weights/weights.component.html',
    directives: [LineChartDirective, CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: ['app/components/weights/weights.css']
})
export class WeightsComponent implements OnInit {
    months: string[] = moment.monthsShort();
    date: Date = new Date()
    people: Person[] = [];
    selectedYear = this.date.getFullYear();
    colors = ['red', 'blue', 'green', 'orange', 'pink', 'gold', 'purple', 'rose'];

    constructor(private peopleService: PeopleService) {

    }

    ngOnInit() {
        this.get(this.date)
    }

    changeValue(people) {
        this.people = [...people];
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
            });
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