import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private urlBackend = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(name: String, email: String): Observable<NewsletterResponse>{
    const data = {name, email};

    return this.http.post<NewsletterResponse>(this.urlBackend, data);
  }
}
