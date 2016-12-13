export default function authReducer(state = {
    authenticated: false,
}, action) {
    switch (action.type) {
        case 'USER_INFO':
            return { ...state, userInfo: action.payload.data };
        case 'AUTHENTICATE':
            return { ...state, authenticated: true };
        case 'LOGOUT':
            return { ...state, authenticated: false };
    }
}