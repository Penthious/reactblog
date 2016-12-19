import { OPEN_NAV, CLOSE_NAV, TOGGLE_NAV } from '../actions/types';

export default function navbarReducer(state = {
    open: false,
}, action) {
    switch (action.type) {
        case OPEN_NAV: {
            return { ...state, open: true };
        }
        case CLOSE_NAV: {
            return { ...state, open: false };
        }
        case TOGGLE_NAV: {
            return { ...state, open: !state.open };
        }
        default:
            return state;
    }
}
