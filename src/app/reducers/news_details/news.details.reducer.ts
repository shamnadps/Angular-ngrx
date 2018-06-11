import { Action } from "@ngrx/store";
import * as newsActions from "../../actions/news.actions";
import { News } from "../../interfaces/news";
import { NewsDetails } from "../../interfaces/news_details";

export interface NewsDetailsState {
  newsDetails: NewsDetails[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: NewsDetailsState = {
  newsDetails: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: newsActions.NewsActions
): NewsDetailsState {
  switch (action.type) {
    case newsActions.NewsActionTypes.LoadNewsDetails:
      return {
        ...state,
        loading: true
      };
    case newsActions.NewsActionTypes.AddNews:
      const newItem = {
        ...action.payload,
        title: "test",
        id: 123
      };
      const newsList = state.newsDetails.push(newItem);
      return {
        ...state,
        loading: false,
        loaded: true,
        newsDetails: state.newsDetails
      };
    case newsActions.NewsActionTypes.LoadNewsDetailsFailed:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case newsActions.NewsActionTypes.LoadNewsDetailsSuccess:
      const newsDetails = state.newsDetails.concat(action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        newsDetails
      };

    default:
      return state;
  }
}

export const getNewsDetails = (state: NewsDetailsState) => {
  return state.newsDetails;
};
export const getNewsDetailsLoaded = (state: NewsDetailsState) => state.loading;
export const getNewsDetailsLoading = (state: NewsDetailsState) => state.loaded;