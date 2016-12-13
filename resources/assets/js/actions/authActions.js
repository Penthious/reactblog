import axios from 'axios';
import {browserHistory} from 'react-router';

export function loginUser({email,password}) {
    console.log(email, password);
    return function (dispatch) {
        axios.post('/login', { email, password, })
            .then(response => {
                dispatch({
                    type: 'USER_INFO',
                    payload: response.data
                });
                console.log('1');
                //browserHistory.push("/");
            })

            .catch(()=> {
                //dispatch(authError("Empty Required Field"));
                console.log('test');
            });
    }

}
