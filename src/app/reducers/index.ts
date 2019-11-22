import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

// application type state
export interface AddapptableState {

}

// reducers
export const reducers: ActionReducerMap<AddapptableState> = {
  router: routerReducer
};

// meta recuders only use on production mode
export const metaReducers: MetaReducer<AddapptableState>[] = !environment.production ? [storeFreeze] : [];
