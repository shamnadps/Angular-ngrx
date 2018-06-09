import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as newsActions from "../../actions/news.actions";
import { NewsService } from "../../services/news.service";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  @Effect()
  effect$ = this.actions$.ofType(newsActions.NewsActionTypes.LoadNewsId).pipe(
    switchMap(() => {
      return this.newsService.getNewsIds().pipe(
        map(newsIds => new newsActions.LoadNewsIdSuccess(newsIds)),
        catchError(error => of(new newsActions.LoadNewsIdFailed(error)))
      );
    })
  );
}
