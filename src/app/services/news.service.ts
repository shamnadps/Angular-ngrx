import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { News } from "../interfaces/news";
import { NewsDetails } from "../interfaces/news_details";
import { LoadNewsDetails } from "../actions/news.actions";

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNewsIds(): Observable<News[]> {
    return this.http
      .get<News[]>("https://hacker-news.firebaseio.com/v0/topstories.json")
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getNewsDetails(action): Observable<NewsDetails[]> {
    return this.http
      .get<NewsDetails[]>(
        `https://hacker-news.firebaseio.com/v0/item/${action.payload}.json`
      )
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
