import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../models/book.model';

@Injectable({providedIn: 'root'})
export class BookService {
    public host = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    public recupererTousBooks(page: number, size: number): Observable<any> {
        return this.http.get(this.host + '/books?page='+page+'&size='+size);
    }

    public recupererURL(url: string): Observable<Book> {
        return this.http.get<Book>(url);
    }

    public ajouterBook(url: string, book: Book): Observable<Book>{
        return this.http.post<Book>(url, book);
    }

    public supprimerBook(url: string): Observable<any> {
        return this.http.delete(url);
    }
}
