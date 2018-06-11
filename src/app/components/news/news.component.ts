import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "../../interfaces/news";
import { State } from "../../reducers";
import { Store } from "@ngrx/store";
import { NewsService } from "../../services/news.service";
import * as fromReducers from "../../reducers";
import * as fromActions from "../../actions/news.actions";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
@Component({
  selector: "app-news",
  providers: [NewsService],
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
  animations: [
    trigger("listStagger", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-15px)" }),
            stagger(
              "50ms",
              animate(
                "550ms ease-out",
                style({ opacity: 1, transform: "translateY(0px)" })
              )
            )
          ],
          { optional: true }
        ),
        query(":leave", animate("50ms", style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class NewsComponent implements OnInit {
  newsIds$: Observable<News[]>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.newsIds$ = this.store.select(fromReducers.getNewsDetails);
    this.store.dispatch(new fromActions.LoadNewsDetails());
  }
}
