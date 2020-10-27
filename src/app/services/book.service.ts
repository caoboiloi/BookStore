import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './../models/Book.class';

@Injectable({
	providedIn: 'root'
})
export class BookService {
	// API GET BOOKS
	public API: string = 'http://localhost:8080/api/books';
	public API_feature: string = 'http://localhost:8080/api/books/feature/';
	public API_provider: string = 'http://localhost:8080/api/books/provider/';
	public API_publisher: string = 'http://localhost:8080/api/books/publisher/';
	public API_bestseller: string = 'http://localhost:8080/api/books/best/1';
	public API_sale: string = 'http://localhost:8080/api/books/sale/1';
	public API_id: string = 'http://localhost:8080/api/books/id/';
	public API_new: string = 'http://localhost:8080/api/books/new/1';
	public API_freeship: string = 'http://localhost:8080/api/books/free/';
	constructor(
		public http: HttpClient
	) { }

	getAllBook(): Observable<Book[]> {
		return this.http.get<Book[]>(this.API);
	}

	getFeatureBook(feature): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_feature + feature);
	}

	getBookByProvider(id): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_provider + id);
	}

	getBookByFreeship(key): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_freeship + key);
	}

	getBookByPublisher(id): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_publisher + id);
	}

	getAllBestSellerBook(): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_bestseller);
	}

	getAllSaleBook(): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_sale);
	}

	getAllNewBook(): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_new);
	}

	getBookById(id): Observable<Book> {
		return this.http.get<Book>(this.API_id + id);
	}

	handleError(err) {
		if (err.error instanceof Error) {
			console.log(`Client-side error: ${err.error.message}`);
		}
		else {
			console.log(`Server-side error: ${err.status} - ${err.error}`);
		}
	}
}
