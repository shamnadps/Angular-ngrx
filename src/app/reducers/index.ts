import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromNews from "./news.reducer";
import * as fromNewsDetails from "./news.details.reducer";

export interface State {
  newsState: fromNews.NewsState;
  newsDetailsState: fromNewsDetails.NewsDetailsState;
}

export const reducers: ActionReducerMap<State> = {
  newsState: fromNews.reducer,
  newsDetailsState: fromNewsDetails.reducer
};

export const getNewsFeatureState = createFeatureSelector("news");

export const getNewsState = createSelector(
  getNewsFeatureState,
  (state: State) => state.newsState
);

export const getNewsIds = createSelector(getNewsState, fromNews.getNewsIds);
export const getNewsIdLoaded = createSelector(
  getNewsState,
  fromNews.getNewsIdsLoaded
);
export const getNewsIdLoading = createSelector(
  getNewsState,
  fromNews.getNewsIdsLoading
);

export const getNewsDetailsFeatureState = createFeatureSelector("news-details");

export const getNewsDetailsState = createSelector(
  getNewsDetailsFeatureState,
  (state: State) => state.newsDetailsState
);

export const getNewsDetails = createSelector(
  getNewsDetailsState,
  fromNewsDetails.getNewsDetails
);
export const getNewsDetailsLoaded = createSelector(
  getNewsDetailsState,
  fromNewsDetails.getNewsDetailsLoaded
);
export const getNewsDetailsLoading = createSelector(
  getNewsDetailsState,
  fromNewsDetails.getNewsDetailsLoading
);
