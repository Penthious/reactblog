import axios from 'axios';

import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    SHOW_POST,
    SHOW_POST_SUCCESS,
    EDIT_POST,
    EDIT_POST_SUCCESS,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
} from '../actions/types';

export function fetchAllPostsSuccess(posts) {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts,
    };
}

export function fetchAllPosts() {
    return (dispatch) => {
        dispatch({ type: FETCH_POST });

        axios.get('/blog')
            .then((response) => {
                console.log(response);
                dispatch(fetchAllPostsSuccess(response.data));
            });
    };
}

