import {Component} from 'angular2/core';
import { WeightsComponent } from './../weights/weights.component';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <weights></weights>
    </div>
    `,
    directives: [WeightsComponent]
})
export class AppComponent { }
