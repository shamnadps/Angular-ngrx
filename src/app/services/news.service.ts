import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { News } from "../interfaces/news";
import { NewsDetails } from "../interfaces/news_details";

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNewsIds(): Observable<News[]> {
    return this.http
      .get<News[]>("https://hacker-news.firebaseio.com/v0/topstories.json")
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getNewsDetails(): Observable<NewsDetails[]> {
    return this.http
      .get<News[]>(`https://hacker-news.firebaseio.com/v0/item/123.json`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
