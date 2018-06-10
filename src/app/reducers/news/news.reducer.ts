import { Action } from "@ngrx/store";
import * as newsActions from "../../actions/news.actions";
import { News } from "../../interfaces/news";

export interface NewsState {
  news: News[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: NewsState = {
  news: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: newsActions.NewsActions
): NewsState {
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

export const getNewsIds = (state: NewsState) => {
  return state.news;
};
export const getNewsIdsLoaded = (state: NewsState) => state.loading;
export const getNewsIdsLoading = (state: NewsState) => state.loaded;
