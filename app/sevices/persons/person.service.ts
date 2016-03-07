import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PeopleService {
    headers: Headers;
    api: string = `http://pigofthemonthapi.azurewebsites.net/api`;

    constructor(public _http: Http) {
        this.makeHeaders();
    }

    makeHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.headers = headers;
    }

    get(date: Date): any {
        return this._http.get(`${this.api}/people/${date.toISOString()}`)
            .map((response: Response) => response.json());
    }
    
    create(person, year) {
        return this._http.post(`${this.api}/people/${year}`, JSON.stringify(person),
            { headers: this.headers })
            .map((response: Response) => response.json());
    }

    put(people) {
        return this._http.put(`${this.api}/people`, JSON.stringify(people),
            { headers: this.headers })
            .map((response: Response) => response.json());
    }

    delete(person) {
        return this._http.delete(`${this.api}/people/${person.Id}`,
            { headers: this.headers })
            .map((response: Response) => response.json());
    }
    
}
