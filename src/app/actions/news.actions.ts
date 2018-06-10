import { Action } from "@ngrx/store";
import { News } from "../interfaces/news";
import { NewsDetails } from "../interfaces/news_details";

export enum NewsActionTypes {
  LoadNewsId = "[News] Load News Id",
  LoadNewsIdSuccess = "[News] Load News Id Sucess",
  LoadNewsIdFailed = "[News] Load News Id Failed",
  LoadNewsDetails = "[News] Load News Details",
  LoadNewsDetailsSuccess = "[News] Load News Details Sucess",
  LoadNewsDetailsFailed = "[News] Load News Details Failed"
}

export class LoadNewsId implements Action {
  readonly type = NewsActionTypes.LoadNewsId;
}

export class LoadNewsIdSuccess implements Action {
  readonly type = NewsActionTypes.LoadNewsIdSuccess;
  constructor(public payload: News[]) {}
}

export class LoadNewsIdFailed implements Action {
  readonly type = NewsActionTypes.LoadNewsIdFailed;
  constructor(public payload: any) {}
}
export class LoadNewsDetails implements Action {
  readonly type = NewsActionTypes.LoadNewsDetails;
  constructor(public newsId: number) {}
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
  | LoadNewsId
  | LoadNewsIdSuccess
  | LoadNewsIdFailed
  | LoadNewsDetails
  | LoadNewsDetailsSuccess
  | LoadNewsDetailsFailed;
