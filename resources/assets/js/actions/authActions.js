import axios from 'axios';
import {browserHistory} from 'react-router';

export function loginUser({email,password}){
    return function(dispatch){
        axios.post('/login', {email,password})
            .then(response => {
                dispatch({type: 'USER_INFO',
                    payload:response.data.token
                });
                localStorage.setItem('token',response.data.token);
                browserHistory.push("/");
            })

            .catch(()=>{
                dispatch(authError("Empty Required Field"));
            });
    }

}
