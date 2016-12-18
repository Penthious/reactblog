import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import navbar from './navbarReducer';
import auth from './authReducer';

export default combineReducers({
    navbar,
    auth,
    form: formReducer.plugin({
        contact: (state, action) => {
            switch (action.type) {
                case 'ACCOUNT_SAVE_SUCCESS':
                    return undefined;
                default:
                    return state;
            }
        },
    }),
});
