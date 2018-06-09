import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromNews from "./news.reducer";

export interface State {
  newsState: fromNews.State;
}

export const reducers: ActionReducerMap<State> = {
  newsState: fromNews.reducer
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
