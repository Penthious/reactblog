import axios from 'axios';
import { browserHistory } from 'react-router';

/**
 * Logs out the user
 * @returns {{type: string}}
 */
export const logoutUser = () => {
    localStorage.removeItem('token');
    return { type: 'LOGOUT' };
};

/**
 * Ajax request to fetch current user info
 * @param token
 */
export const userInfo = token =>
    (dispatch) => {
        axios.get('/api/userinfo',
            {
                headers: { authorization: `Bearer${token}` },
            })
            .then((response) => {
                dispatch({
                    type: 'USER_INFO',
                    payload: response.data,
                });
                // browserHistory.push('/');
            })
            .catch(() => {
                dispatch(logoutUser());
            });
    };

/**
 * Login the user
 * @param email
 * @param password
 */
export const loginUser = ({ email, password }) =>
    (dispatch) => {
        axios.post('/login', { email, password })
            .then((response) => {
                dispatch({
                    type: 'LOGIN_TOKEN',
                    payload: response.data.token,
                });
                localStorage.setItem('token', response.data.token);
                dispatch({ type: 'AUTHENTICATE' });
                dispatch(userInfo(response.data.token));
            })

            .catch((error) => {
                // dispatch(authError("Empty Required Field"));
                console.log(error);
            });
    };
