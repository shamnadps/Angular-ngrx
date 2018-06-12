import { Action } from "@ngrx/store";
import { News } from "../interfaces/news";
import { NewsDetails } from "../interfaces/news_details";

export enum NewsActionTypes {
  AddNews = "[News] Add News",
  UpdateNews = "[News] Update News",
  DeleteNews = "[News] Delete News",
  LoadNewsDetails = "[News] Load News Details",
  LoadNewsDetailsSuccess = "[News] Load News Details Sucess",
  LoadNewsDetailsFailed = "[News] Load News Details Failed"
}

export class AddNews implements Action {
  readonly type = NewsActionTypes.AddNews;
  constructor(public payload: News) {}
}

export class UpdateNews implements Action {
  readonly type = NewsActionTypes.UpdateNews;
  constructor(public payload: NewsDetails) {}
}

export class DeleteNews implements Action {
  readonly type = NewsActionTypes.DeleteNews;
  constructor(public payload: number) {}
}

export class LoadNewsDetails implements Action {
  readonly type = NewsActionTypes.LoadNewsDetails;
}

export class LoadNewsDetailsSuccess implements Action {
  readonly type = NewsActionTypes.LoadNewsDetailsSuccess;
  constructor(public payload: NewsDetails[]) {}
}

export class LoadNewsDetailsFailed implements Action {
  readonly type = NewsActionTypes.LoadNewsDetailsFailed;
  constructor(public payload: any) {}
}

export type NewsActions =
  | AddNews
  | UpdateNews
  | DeleteNews
  | LoadNewsDetails
  | LoadNewsDetailsSuccess
  | LoadNewsDetailsFailed;
