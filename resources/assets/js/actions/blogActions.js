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
    DELETE_POST,
} from '../actions/types';

/**
 * Sets the state of post to all the received post
 * @param posts
 * @returns {{type, payload: *}}
 */
export const fetchAllPostsSuccess = (posts) => ({
    type: FETCH_POST_SUCCESS,
    payload: posts,
});

/**
 * Ajax call to fetch all post
 * @returns {Function}
 */
export const fetchAllPosts = () => (dispatch) => {
    dispatch({ type: FETCH_POST });

    axios.get('/blog')
        .then((response) => {
            const data       = response.data.map(post => ({ ...post, isActive: false }));
            data[0].isActive = true;
            dispatch(fetchAllPostsSuccess(data));
        });
};

/**
 * Fetches all post after delete;
 */
export const deletePostSuccess = () => fetchAllPosts();

/**
 * Ajax call to delete the current post
 * @param id
 */
export const deletePost = id =>
    (dispatch) => {
        axios.delete(`/api/destroy/${id}`,
            {
                headers: { authorization: localStorage.getItem('token') },
            })
            .then((response) => {
                dispatch(deletePostSuccess());
            });
    };

export const editPostSuccess = (data) => ({});

export const editPost = id =>
    (dispatch) => {
        axios.get(`/api/edit/${id}`,
            {
                headers: { authorization: localStorage.getItem('token') },
            })
            .then((response) => {
                console.log(response);
            });
    };

