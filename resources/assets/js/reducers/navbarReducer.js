export default function reducer(state = {
    open: '1',
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
    }
    return state;
}
