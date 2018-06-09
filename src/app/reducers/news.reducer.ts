import { Action } from "@ngrx/store";
import * as newsActions from "../actions/news.actions";
import { News } from "../interfaces/news";

export interface State {
  news: News[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  news: [{ id: "1" }],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: newsActions.NewsActions
): State {
  switch (action.type) {
    case newsActions.NewsActionTypes.LoadNewsId:
      return {
        ...state,
        loading: true
      };
    case newsActions.NewsActionTypes.LoadNewsIdFailed:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case newsActions.NewsActionTypes.LoadNewsIdSuccess:
      const news = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        news
      };

    default:
      return state;
  }
}

export const getNewsIds = (state: State) => {
  return state.news;
};
export const getNewsIdsLoaded = (state: State) => state.loading;
export const getNewsIdsLoading = (state: State) => state.loaded;
