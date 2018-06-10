import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import newsReducers from "./news";
import newsDetailReducers from "./news_details";

export interface State {
  newsState: newsReducers.NewsState;
  newsDetailsState: newsDetailReducers.NewsDetailsState;
}

export const reducers: ActionReducerMap<State> = {
  newsState: newsReducers.reducer,
  newsDetailsState: newsDetailReducers.reducer
};

export const getNewsFeatureState = createFeatureSelector("news");

export const getNewsState = createSelector(
  getNewsFeatureState,
  (state: State) => state.newsState
);

export const getNewsIds = createSelector(getNewsState, newsReducers.getNewsIds);
export const getNewsIdLoaded = createSelector(
  getNewsState,
  newsReducers.getNewsIdsLoaded
);
export const getNewsIdLoading = createSelector(
  getNewsState,
  newsReducers.getNewsIdsLoading
);

export const getNewsDetailsFeatureState = createFeatureSelector("news-details");

export const getNewsDetailsState = createSelector(
  getNewsDetailsFeatureState,
  (state: State) => state.newsDetailsState
);

export const getNewsDetails = createSelector(
  getNewsDetailsState,
  newsDetailReducers.getNewsDetails
);
export const getNewsDetailsLoaded = createSelector(
  getNewsDetailsState,
  newsDetailReducers.getNewsDetailsLoaded
);
export const getNewsDetailsLoading = createSelector(
  getNewsDetailsState,
  newsDetailReducers.getNewsDetailsLoading
);
