import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as newsActions from "../../actions/news.actions";
import { NewsService } from "../../services/news.service";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
@Injectable()
export class NewsDetailEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  @Effect()
  effect$ = this.actions$
    .ofType(newsActions.NewsActionTypes.LoadNewsDetails)
    .pipe(
      switchMap(action => {
        return this.newsService.getNewsDetails(action).pipe(
          map(newsIds => new newsActions.LoadNewsDetailsSuccess(newsIds)),
          catchError(error => of(new newsActions.LoadNewsDetailsFailed(error)))
        );
      })
    );
}
