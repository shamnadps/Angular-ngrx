import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { State } from "../../reducers";
import { Store } from "@ngrx/store";
import { NewsDetails } from "../../interfaces/news_details";

import * as fromReducers from "../../reducers";
import * as fromActions from "../../actions/news.actions";

import { ActivatedRoute } from "@angular/router";

import { map } from "rxjs/operators";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.scss"]
})
export class NewsDetailsComponent implements OnInit {
  newsDetails$: Observable<NewsDetails[]>;
  newsId: number;
  constructor(private store: Store<State>, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.newsId = params.id));
  }

  ngOnInit() {
    this.store.dispatch(new fromActions.LoadNewsDetails(this.newsId));
    this.newsDetails$ = this.store.select(fromReducers.getNewsDetails);
    this.newsDetails$ = this.newsDetails$.pipe(
      map(news =>
        news.filter(news => {
          if (this.newsId == news.id) {
          }
          return news.id == this.newsId;
        })
      )
    );
  }
}
