import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NewsService {
    public host = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    public recupererTousNews(): Observable<any> {
        return this.http.get(this.host + '/news');
    }

    public recupererURL(url: string): Observable<any>{
        return this.http.get(url);
    }
}
