import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from './../models/Publisher.class';

@Injectable({
	providedIn: 'root'
})
export class PublisherService {

	public API: string = 'http://localhost:8080/api/publishers';
	constructor(
		public http:HttpClient
	) { }

	getAllPublisher(): Observable<Publisher[]> {
		// trong angular 5+
		return this.http.get<Publisher[]>(this.API);
	}

	handleError(err){
		if(err.error instanceof Error) {
			console.log(`Client-side error: ${err.error.message}`);
		}
		else {
			console.log(`Server-side error: ${err.status} - ${err.error}`);
		}
	}
}
