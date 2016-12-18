import { USER_INFO, AUTHENTICATE, LOGIN_TOKEN, LOGOUT } from '../actions/types';

export default function authReducer(state = {
    authenticated: false,
    token: '',
}, action) {
    switch (action.type) {
        case USER_INFO:
            return { ...state, userInfo: action.payload };
        case AUTHENTICATE:
            return { ...state, authenticated: true };
        case LOGIN_TOKEN:
            return { ...state, token: action.payload };
        case LOGOUT:
            return { ...state, authenticated: false };
        default :
            return { ...state };
    }
}
