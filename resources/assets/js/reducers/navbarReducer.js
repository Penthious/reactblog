export default function reducer(state = {
    open: false,
}, action) {
    switch (action.type) {
        case 'OPEN_NAV':
        {
            return { ...state, open: true };
        }
        case 'CLOSE_NAV':
        {
            return { ...state, open: false };
        }
        case 'TOGGLE_NAV':
        {
            return {...state, open: !state.open}
        }
    }
    return state;
}
