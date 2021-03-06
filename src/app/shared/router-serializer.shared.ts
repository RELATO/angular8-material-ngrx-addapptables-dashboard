import { Params, RouterStateSnapshot } from '@angular/router';
import {
    RouterReducerState,
    RouterStateSerializer,
} from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export interface State {
    router: RouterReducerState<RouterStateUrl>;
}

// Addapptable router serializer
export class AddapptableRouterSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { url, root: { queryParams } } = routerState;
        const { params } = route;
        return { url, params, queryParams };
    }
}
