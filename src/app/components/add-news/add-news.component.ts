import { Component, OnInit } from "@angular/core";

import { State } from "../../reducers";
import { Store } from "@ngrx/store";

import * as fromReducers from "../../reducers";
import * as fromActions from "../../actions/news.actions";

@Component({
  selector: "app-add-news",
  templateUrl: "./add-news.component.html",
  styleUrls: ["./add-news.component.scss"]
})
export class AddNewsComponent implements OnInit {
  constructor(private store: Store<State>) {}
  show = false;
  addNews(form) {
    this.store.dispatch(new fromActions.AddNews(form.value));
    form.reset();
    this.show = true;
  }
  ngOnInit() {}
}
