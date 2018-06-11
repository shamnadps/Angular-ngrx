import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as newsActions from "../../actions/news.actions";
import { NewsService } from "../../services/news.service";
import { map, switchMap, catchError, tap } from "rxjs/operators";
import { zip } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class NewsEffects {
  constructor(
    private actions$: Actions,
    private newsService: NewsService,
    private httpClient: HttpClient
  ) {}

  @Effect()
  effect$ = this.actions$.ofType(newsActions.NewsActionTypes.LoadNewsId).pipe(
    switchMap(() =>
      this.httpClient.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      )
    ),
    map((ids: number[]) => ids.slice(0, 10)),
    map((ids: number[]) =>
      ids.map(id =>
        this.httpClient.get<{ title: string; id: number }>(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        )
      )
    ),
    switchMap(arr => zip(...arr)),
    map(result => new newsActions.LoadNewsDetailsSuccess(result))
  );
}
