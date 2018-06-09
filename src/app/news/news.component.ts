import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "../interfaces/news";
import { State } from "../reducers";
import { Store } from "@ngrx/store";
import { NewsService } from "../services/news.service";
import * as fromReducers from "../reducers";

@Component({
  selector: "app-news",
  providers: [NewsService],
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  news$: News[];
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.select(fromReducers.getNewsIds).subscribe(state => {
      this.news$ = state;
    });
  }
}
