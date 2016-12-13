import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import navbar from './navbarReducer';
import auth from './authReducer';

export default combineReducers({
    navbar,
    auth,
    form: formReducer,
});
