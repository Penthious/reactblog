import axios from 'axios';
import { browserHistory } from 'react-router';

export function userInfo(data) {
    return dispatch => {
        axios.get('/api/userinfo', {
            headers: { authorization: `Bearer${data}` },
        })
            .then(response => {
                dispatch({
                    type: 'USER_INFO',
                    payload: response.data,
                });
                browserHistory.push('/');
            });
    };
}

export function loginUser({ email, password }) {
    return function (dispatch) {
        axios.post('/login', { email, password })
            .then(response => {
                dispatch({
                    type: 'LOGIN_TOKEN',
                    payload: response.data.token,
                });
                localStorage.setItem('token', response.data.token);
                dispatch({ type: 'AUTHENTICATE' });
                dispatch(userInfo(response.data.token));
            })

            .catch(()=> {
                // dispatch(authError("Empty Required Field"));
                console.log('test');
            });
    };
}

