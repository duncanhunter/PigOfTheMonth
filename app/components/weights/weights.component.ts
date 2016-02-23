import {Component, OnInit} from 'angular2/core';
import { PeopleService } from './../../sevices/persons/person.service';
import { Person } from './../../models/models';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { LineChartDirective  } from './../../sevices/charts/lineChart.service';


@Component({
    selector: 'weights',
    templateUrl: 'app/components/weights/weights.component.html',
    directives: [LineChartDirective, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class WeightsComponent implements OnInit {
    months: string[] = moment.monthsShort();
    date: Date = new Date()
    people: Person[] = [];
    colors = ['red', 'blue', 'green', 'orange', 'pink'];

    constructor(private personService: PeopleService) {
        
    }
    
    ngOnInit() {
        this.get(this.date)
    }

    get(date: Date) {
        this.personService.get(date)
            .subscribe(people => {
                this.people = people;
            });
    }


    save() {

    }

    delete() {

    }

    update() {

    }

    put() {

    }



}